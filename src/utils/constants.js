export const BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:5000"  // your local backend port
    : "https://devtinderserver.onrender.com"; // Render backend
