# Care Connect — Production Deployment

Stack: **React (Vite) frontend** + **Express + MongoDB backend** + **Lovable Cloud auth (Supabase JWT)** + **Cloudinary photos**.

---

## 1. Backend (Express API) — deploy to Render / Railway / Fly

1. `server/` folder ko ek alag GitHub repo me push karein (ya monorepo me root directory `server` set karein).
2. **Render.com** → New → Web Service → repo connect.
   - Build command: `npm install`
   - Start command: `npm start`
   - Node version: 18+
3. Environment variables (Render dashboard → Environment):

   | Key | Value |
   |---|---|
   | `MONGODB_URI` | MongoDB Atlas connection string |
   | `CLOUDINARY_CLOUD_NAME` | Cloudinary dashboard se |
   | `CLOUDINARY_API_KEY` | Cloudinary dashboard se |
   | `CLOUDINARY_API_SECRET` | Cloudinary dashboard se |
   | `SUPABASE_URL` | `https://txjqjismdlmfgsmwyipt.supabase.co` |
   | `CORS_ORIGIN` | apni frontend ka URL, e.g. `https://care-connect.lovable.app` |
   | `PORT` | (Render auto-set karta hai, blank chhodein) |

4. Deploy ke baad URL note karein: `https://your-api.onrender.com`
5. Health check: `GET https://your-api.onrender.com/health` → `{ ok: true }`

### MongoDB Atlas
- Free M0 cluster banayein.
- Database Access → user banayein.
- Network Access → `0.0.0.0/0` allow (ya Render outbound IPs).
- Connect → Drivers → URI copy → `<password>` aur DB name `careconnect` daalein.

### Cloudinary
- https://cloudinary.com/console → Dashboard pe Cloud name, API Key, API Secret milte hain.

---

## 2. Frontend — Lovable publish ya Vercel / Netlify

### Option A — Lovable (recommended)
1. Top-right **Publish** button dabayein.
2. Settings me environment variable add karein:
   - `VITE_API_URL` = `https://your-api.onrender.com`
3. Re-publish karein.

### Option B — Vercel
1. Repo import karein.
2. Framework: Vite. Build: `npm run build`. Output: `dist`.
3. Environment Variables → `VITE_API_URL=https://your-api.onrender.com`
4. Deploy.

> **Important:** `VITE_API_URL` set na karne par frontend `http://localhost:5000` use karega (sirf local dev ke liye).

---

## 3. Auth (already wired)

- Lovable Cloud me Google + Email/Password authentication enabled hai.
- Frontend `supabase.auth.getSession()` se access token leta hai aur `Authorization: Bearer <token>` header me bhejta hai.
- Backend `jose` library ke through Supabase JWKS endpoint se token verify karta hai — koi shared secret nahi chahiye.

---

## 4. Smoke test (production)

```bash
# 1. Health
curl https://your-api.onrender.com/health

# 2. Public reviews list
curl https://your-api.onrender.com/api/reviews

# 3. Frontend pe sign in karke review post karein → list me dikhega
```

---

## 5. Common gotchas

- **CORS error** → backend `CORS_ORIGIN` me apna exact frontend URL daalein (no trailing slash).
- **401 Invalid token** → backend ka `SUPABASE_URL` frontend project se match karna chahiye.
- **Render free tier cold-start** → pehli request 30-50s le sakti hai; upgrade ya keep-alive ping use karein.
- **Cloudinary upload fail** → teenon `CLOUDINARY_*` keys check karein.
