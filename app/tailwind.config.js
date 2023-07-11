module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  content: ['./src/**/*.{vue,js,ts}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#ea99f7",
          "secondary": "#ea8212",
          "accent": "#fcd6ba",
          "neutral": "#222027",
          "base-100": "#ecedf4",
          "info": "#a3e3f5",
          "success": "#6de3b2",
          "warning": "#cf8817",
          "error": "#ea6274",
        },
      },
     "cyberpunk", "dark", "lemonade"
    ],
  },
  plugins: [require('daisyui'), require("@tailwindcss/typography")],
};


