import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Permite alternância de tema via classe "dark" no <html>
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "oklch(var(--background) / <alpha-value>)",
        foreground: "oklch(var(--foreground) / <alpha-value>)",
        border: "oklch(var(--border) / <alpha-value>)",
        ring: "oklch(var(--ring) / <alpha-value>)",
        input: "oklch(var(--input) / <alpha-value>)",
        card: "oklch(var(--card) / <alpha-value>)",
        destructive: "oklch(var(--destructive) / <alpha-value>)",
        muted: "oklch(var(--muted) / <alpha-value>)",
        accent: "oklch(var(--accent) / <alpha-value>)",
        popover: "oklch(var(--popover) / <alpha-value>)",
        primary: "oklch(var(--primary) / <alpha-value>)",
        secondary: "oklch(var(--secondary) / <alpha-value>)",
        sidebar: "oklch(var(--sidebar) / <alpha-value>)",
        // Adicione mais cores customizadas conforme necessidade
      },
    },
  },
  plugins: [],
};

export default config;
