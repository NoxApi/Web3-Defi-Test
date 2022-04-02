module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
      screens: {
        'bp1': { 'max': '1535px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }
  
        'bp2': {'max': '1024px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
        'bp2': {'max': '1024px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
        'TL': {'min': '1534px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
        'nav1': {'max': '1920px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
        'MB': {'min': '639px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
        'MBH': {'max': '640px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }

      }

  },
  plugins: [],
}
