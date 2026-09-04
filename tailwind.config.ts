import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Sensoria — verdes salvia / oliva sobre crema
        cream:    "#EFEAE0",
        "cream-d": "#E4DECF",
        sand:     "#C9C3A9",
        sage:     "#9AA678",
        "sage-d": "#7C8A5B",
        olive:    "#5B6842",
        forest:   "#3B4A2E",
        ink:      "#2C3421",
        muted:    "#6B7358",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        sans:    ["Inter", "system-ui", "sans-serif"],
        grotesk: ["Space Grotesk", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
