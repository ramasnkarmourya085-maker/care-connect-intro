import { MessageCircle } from "lucide-react";

const PHONE = "910000000000"; // replace with real number
const MESSAGE = "Hi Care Connect, I'd like to know more.";

const WhatsAppFloat = () => {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed right-5 md:right-6 bottom-[100px] z-[9998] block"
    >
      {/* Ripple rings */}
      <span className="pointer-events-none absolute inset-0 m-auto w-14 h-14 rounded-full bg-[#25D366]/40 animate-ripple-1" />
      <span className="pointer-events-none absolute inset-0 m-auto w-14 h-14 rounded-full bg-[#25D366]/30 animate-ripple-2" />

      <span className="relative w-14 h-14 grid place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] ring-2 ring-white/30 transition-transform duration-300 group-hover:scale-110 group-hover:animate-bounce-soft">
        <MessageCircle className="w-6 h-6" strokeWidth={2.4} />
      </span>

      {/* Tooltip */}
      <span className="pointer-events-none absolute right-[72px] top-1/2 -translate-y-1/2 whitespace-nowrap text-xs font-medium bg-foreground text-background px-3 py-1.5 rounded-full opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-lg">
        Chat With Us
      </span>
    </a>
  );
};

export default WhatsAppFloat;
