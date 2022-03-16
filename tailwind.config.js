module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
      screens: {
        'bp1': { 'max': '1580px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }
  
        'bp2': {'max': '1280px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
      }

  },
  plugins: [],
}
