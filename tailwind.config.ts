import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1e1e1e",
          secondary: "#1d355d",
          accent: "#f4c095",
          neutral: "#3c3c3c",
          "base-100": "#121313",
          info: "#B2FFFF",
          success: "#90EE90",
          warning: "#F28500",
          error: "#CC3333",
        },
      },
    ],
  },
};

export default config;
