// 👉 Apne deployed Express server ka URL yahan daal dein.
// Local testing: "http://localhost:5000"
// Render deploy: "https://your-app.onrender.com"
export const API_BASE_URL =
  (import.meta.env.VITE_API_URL as string | undefined) ?? "http://localhost:5000";
