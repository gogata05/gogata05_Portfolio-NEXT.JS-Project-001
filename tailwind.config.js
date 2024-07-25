/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        phone: { min: "300px", max: "640px" },
        "6-9": { min: "640px", max: "982px" },
        "9-12": { min: "982px", max: "1280px" }
      },
      animation: {
        "fade-in": "fade-in 3s ease-in-out forwards",
        title: "title 3s ease-out forwards",
        "fade-left": "fade-left 3s ease-in-out forwards",
        "fade-right": "fade-right 3s ease-in-out forwards"
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0%"
          },
          "75%": {
            opacity: "0%"
          },
          "100%": {
            opacity: "100%"
          }
        },
        "fade-left": {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0%"
          },

          "30%": {
            transform: "translateX(0%)",
            opacity: "100%"
          },
          "100%": {
            opacity: "0%"
          }
        },
        "fade-right": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0%"
          },

          "30%": {
            transform: "translateX(0%)",
            opacity: "100%"
          },
          "100%": {
            opacity: "0%"
          }
        },
        title: {
          "0%": {
            "line-height": "0%",
            "letter-spacing": "0.25em",
            opacity: "0"
          },
          "25%": {
            "line-height": "0%",
            opacity: "0%"
          },
          "80%": {
            opacity: "100%"
          },

          "100%": {
            "line-height": "100%",
            opacity: "100%"
          }
        }
      },
      fontFamily: {
        Kanit: ["Kanit"],
        Inter: ["Inter", "sans-serif"],
        Hanken: ['"Hanken Grotesk"', "sans-serif"],
        Exo: ['"Exo 2"', "sans-serif"],
        display: ["var(--font-calsans)"]
      }
    }
  },
  plugins: []
};
