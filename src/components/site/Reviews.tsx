import { useEffect, useState } from "react";
import { Star, Sparkles, Loader2, ImagePlus, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

type Review = {
  id: string;
  name: string;
  rating: number;
  message: string;
  photo_url: string | null;
  created_at: string;
};

const StarRow = ({
  value,
  onChange,
  size = "w-5 h-5",
  interactive = false,
}: {
  value: number;
  onChange?: (v: number) => void;
  size?: string;
  interactive?: boolean;
}) => (
  <div className="flex items-center gap-1">
    {[1, 2, 3, 4, 5].map((n) => (
      <button
        key={n}
        type="button"
        disabled={!interactive}
        onClick={() => onChange?.(n)}
        className={`${interactive ? "cursor-pointer hover:scale-110" : "cursor-default"} transition-transform`}
        aria-label={`${n} star`}
      >
        <Star
          className={`${size} ${
            n <= value
              ? "fill-primary text-primary"
              : "text-muted-foreground/40"
          }`}
        />
      </button>
    ))}
  </div>
);

const Reviews = () => {
  const { toast } = useToast();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const fetchReviews = async () => {
    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(50);
    if (!error && data) setReviews(data as Review[]);
    setLoading(false);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handlePhoto = (file: File | null) => {
    if (!file) {
      setPhoto(null);
      setPhotoPreview(null);
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "Photo too large",
        description: "Please upload an image under 5MB.",
        variant: "destructive",
      });
      return;
    }
    setPhoto(file);
    setPhotoPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedMsg = message.trim();
    if (!trimmedName || !trimmedMsg) {
      toast({ title: "Please fill in your name and review.", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      let photo_url: string | null = null;
      if (photo) {
        const ext = photo.name.split(".").pop() || "jpg";
        const path = `${crypto.randomUUID()}.${ext}`;
        const { error: upErr } = await supabase.storage
          .from("review-photos")
          .upload(path, photo, { contentType: photo.type });
        if (upErr) throw upErr;
        const { data } = supabase.storage.from("review-photos").getPublicUrl(path);
        photo_url = data.publicUrl;
      }

      const { error } = await supabase.from("reviews").insert({
        name: trimmedName.slice(0, 80),
        rating,
        message: trimmedMsg.slice(0, 1000),
        photo_url,
      });
      if (error) throw error;

      toast({ title: "Thank you!", description: "Your review has been posted." });
      setName("");
      setRating(5);
      setMessage("");
      setPhoto(null);
      setPhotoPreview(null);
      fetchReviews();
    } catch (err: any) {
      toast({
        title: "Could not submit review",
        description: err?.message ?? "Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const avg =
    reviews.length > 0
      ? (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1)
      : null;

  return (
    <section id="reviews" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs uppercase tracking-widest text-muted-foreground mb-6">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Community Reviews
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
            What people say about <span className="text-gradient">Care Connect</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Share your experience, rate us with stars, and add a photo if you like.
          </p>
          {avg && (
            <div className="mt-6 inline-flex items-center gap-3 glass rounded-full px-5 py-2">
              <StarRow value={Math.round(Number(avg))} />
              <span className="text-sm font-semibold">{avg} / 5</span>
              <span className="text-xs text-muted-foreground">
                ({reviews.length} review{reviews.length === 1 ? "" : "s"})
              </span>
            </div>
          )}
        </div>

        {/* Submit form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto glass rounded-3xl p-6 md:p-8 space-y-5 mb-16"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={80}
              required
            />
            <div className="flex items-center justify-between glass rounded-md px-4 py-2">
              <span className="text-sm text-muted-foreground">Your rating</span>
              <StarRow value={rating} onChange={setRating} interactive />
            </div>
          </div>
          <Textarea
            placeholder="Share your experience with Care Connect…"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={1000}
            rows={4}
            required
          />

          <div className="flex flex-wrap items-center gap-4">
            <label className="inline-flex items-center gap-2 cursor-pointer text-sm px-4 py-2 rounded-full glass hover:bg-primary/10 transition-colors">
              <ImagePlus className="w-4 h-4 text-primary" />
              <span>{photo ? "Change photo" : "Add photo (optional)"}</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handlePhoto(e.target.files?.[0] ?? null)}
              />
            </label>
            {photoPreview && (
              <div className="relative">
                <img
                  src={photoPreview}
                  alt="Preview"
                  className="w-16 h-16 rounded-xl object-cover ring-1 ring-border"
                />
                <button
                  type="button"
                  onClick={() => handlePhoto(null)}
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-background ring-1 ring-border grid place-items-center hover:bg-destructive/20"
                  aria-label="Remove photo"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}
            <div className="ml-auto">
              <Button type="submit" variant="hero" size="lg" disabled={submitting}>
                {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
                {submitting ? "Posting…" : "Post review"}
              </Button>
            </div>
          </div>
        </form>

        {/* List */}
        <div className="max-w-5xl mx-auto">
          {loading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="w-6 h-6 animate-spin text-primary" />
            </div>
          ) : reviews.length === 0 ? (
            <p className="text-center text-muted-foreground">
              No reviews yet — be the first to share yours!
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {reviews.map((r) => (
                <article
                  key={r.id}
                  className="glass rounded-3xl p-6 hover-lift flex flex-col gap-3"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-semibold">{r.name}</h3>
                    <StarRow value={r.rating} size="w-4 h-4" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">
                    {r.message}
                  </p>
                  {r.photo_url && (
                    <a
                      href={r.photo_url}
                      target="_blank"
                      rel="noreferrer"
                      className="block overflow-hidden rounded-2xl"
                    >
                      <img
                        src={r.photo_url}
                        alt={`Photo by ${r.name}`}
                        loading="lazy"
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </a>
                  )}
                  <p className="text-xs text-muted-foreground mt-auto">
                    {new Date(r.created_at).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
