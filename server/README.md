# Care Connect — Backend (Express + MongoDB)

Reviews API jo MongoDB me data store karta hai aur Cloudinary pe photos upload karta hai.
Auth Lovable Cloud (Google sign-in) se aata hai — frontend Supabase access token bhejta hai
aur server JWKS ke through verify karta hai.

## 1. Setup

```bash
cd server
cp .env.example .env       # values bhar dein
npm install
npm run dev
```

### Required `.env` values

| Key | Kaha se milega |
|---|---|
| `MONGODB_URI` | https://cloud.mongodb.com → Cluster → Connect → Drivers |
| `CLOUDINARY_*` | https://cloudinary.com/console (Dashboard pe 3 values) |
| `SUPABASE_URL` | already filled (`https://txjqjismdlmfgsmwyipt.supabase.co`) |
| `CORS_ORIGIN` | testing me `*`, prod me apna site URL |

## 2. Endpoints

- `GET  /health` → `{ ok: true }`
- `GET  /api/reviews` → list (public)
- `POST /api/reviews` → create (Bearer token required)
  - multipart/form-data: `name`, `rating`, `message`, optional `photo` file

## 3. Deploy (free)

**Render.com** sabse easy:
1. Is `server/` folder ko ek alag GitHub repo me push karein.
2. Render → New → Web Service → repo connect karein.
3. Build command: `npm install` · Start command: `npm start`
4. Environment variables tab me `.env` ke saare values daalein.
5. Deploy hone ke baad URL milega: `https://your-app.onrender.com`

## 4. Frontend connect

Lovable project ki root me ek file banayein `.env.local` (Lovable preview ke liye nahi banegi —
deployed site ke liye Vercel/Netlify pe env var set karein), ya seedha
`src/lib/api.ts` me `API_BASE_URL` constant change kar dein:

```ts
export const API_BASE_URL = "https://your-app.onrender.com";
```
