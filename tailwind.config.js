/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      screens: {
        xs: {raw: "(max-width:370px)"},
        mobilesmall: {raw: "(max-width:670px)"},
        tallXS: { raw: "(max-height: 800px) and (min-width: 1024px)" },
        tallXL: { raw: "(min-height: 800px) and (min-width: 1024px)" },
        tall2XL: { raw: "(min-height: 873px) and (min-width: 1024px)" },
        wtall2XL: { raw: "(max-height: 700px) and (min-width: 1600px)" },
        "3xl": "1920px",
      },
      fontFamily: {
        g8: ['G8', 'sans-serif'],
      },
      backgroundImage: {
        '8877-b': "url('/background/8877-b.png')",
        '8878-b': "url('/background/8878-b.png')",
        '8879-b': "url('/background/8879-b.png')",
        '8880-b': "url('/background/8880-b.png')",
        '8881-b': "url('/background/8881-b.png')",
        '8882-b': "url('/background/8882-b.png')",
        '8883-b': "url('/background/8883-b.png')",
        '8884-b': "url('/background/8884-b.png')",
        '8885-b': "url('/background/8885-b.png')",
        '8886-b': "url('/background/8886-b.png')",
        '8887-b': "url('/background/8887-b.png')",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "custom": 'pulse 1s ease-in-out infinite'
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
