const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "sm": "352px",
    },
    spacing: {
      "0": "0px",
      "sm": "1rem",
      "md": "1.5rem",
      "lg": "2rem",
    },
    maxWidth: {
      "card": "20rem",
    },
    colors: {
      "white": "hsl(0, 0%, 100%)",
      "light-gray": "hsl(212, 45%, 89%)",
      "grayish-blue": "hsl(220, 15%, 55%)",
      "dark-blue": "hsl(218, 44%, 22%)",
      "transparent": "transparent",
    },
    fontSize: {
      "heading": ["1.375rem", { lineHeight: "1.75rem" }],
      "body": ["0.9375rem", { lineHeight: "1.1875rem" }],
    },
    fontWeight: {
      "heading": "700",
      "body": "400",
    },
    letterSpacing: {
      "body": "0.0125rem",
    },
    borderRadius: {
      "card": "1.25rem",
      "img": "0.625rem",
    },
    transitionProperty: {
      "card": "opacity, transform",
      "img": "opacity",
    },
    extend: {
      fontFamily: {
        sans: [
          'Outfit',
          ...defaultTheme.fontFamily.sans,
        ]
      }
    },
  },
  plugins: [],
}
