import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          dark100: "#060714",
          dark90: "#262840",
          grey100: "#7780A1",
          grey50: "#DDE0E8",
          grey20: "#F1F1F6",
          grey10: "#F2F3F6",
          lightBlue: "#4745D0",
          purpleLight: "#514CFF",
          purpleDark: "#2A27C9",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
