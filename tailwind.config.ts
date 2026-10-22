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
        navy: {
          DEFAULT: "#00265D",
          dark: "#001A40",
          deep: "#001335",
          light: "#102036",
        },
        gold: {
          DEFAULT: "#D49A20",
          champagne: "#F0C76A",
          bright: "#FEBE45",
          muted: "#AE8B34",
        },
        slateText: "#526174",
        offwhite: {
          DEFAULT: "#FAFAF8",
          low: "#F4F4F2",
          container: "#EEEEEC",
          high: "#E8E8E6",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Playfair Display", "serif"],
        jakarta: ["var(--font-jakarta)", "Plus Jakarta Sans", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      spacing: {
        gutter: "1.5rem",
        "gutter-mobile": "1rem",
        margin: "4rem",
        "margin-mobile": "1.25rem",
        "margin-tablet": "2.5rem",
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2.5rem",
        "space-2xl": "4rem",
        "space-3xl": "6rem",
      },
      borderRadius: {
        sm: "0.25rem",
        DEFAULT: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
