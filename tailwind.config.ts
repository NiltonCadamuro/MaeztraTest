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
        // bg
        surfacePrimary: "#FAFAFA",
        surfaceSecondary: "#FAA500",
        surfaceTertiary: "#353535",
        surfaceHeader: "#FFFFFF",
        surfaceSearchBar: "#EFEFEF",

        // text
        textPrimary: "#353535",
        textSecondary: "#FFFFFF",
        textTertiary: "#000000",
        textSpecial: "#FAA500",

        // border
        borderPrimary: "#FAA500",
      },
    },

    boxShadow: {
      header: "0 4px 6px rgba(0, 0, 0, 0.08)",
    },
  },
  plugins: [],
};
export default config;
