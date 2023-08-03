/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],

  darkMode: ["class"],

  future: {
    hoverOnlyWhenSupported: true,
  },

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    screens: {
      xxs: '324px',
      xs: '356px',
      sm: '400px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      '2xl': '1800px',
    },

    extend: {
      fontFamily: {
        clash: ['var(--font-clash)'],
        hubot: ['var(--font-hubot)'],
        mona: ['var(--font-mona)'],
        neo: ['var(--font-neo)'],
        nohemi: ['var(--font-nohemi)'],
      },

      colors: {
        brand: "#FACC15",
        darkest: "#0A0A0A",
        dark: "#171717",
        mid: "#8B8B9A",
        light: "#E4E4E7",
        lightest: "#FFFFFF"
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
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
}