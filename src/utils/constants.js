export const BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:5000"   // your local backend
    : "https://devtinderserver.onrender.com"; // your Render backend
