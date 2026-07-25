import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        leaf: {
          50: "#f2fbf4",
          100: "#dff5e5",
          500: "#2f9b57",
          600: "#247a43",
          700: "#1e6239"
        },
        ink: "#26302a"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(31, 75, 48, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
