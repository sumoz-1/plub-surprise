import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#7C3AED",
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444"
      }
    }
  },
  plugins: []
};

export default config;


