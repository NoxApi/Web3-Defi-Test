const plugin = require('tailwindcss/plugin')
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

      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
        "Digesting": '#E2B15B',
        "Done": '#74BFC8',
      },

  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const fonts = {
        
        '.font-tavi': {
          fontFamily: '"Taviraj", serif',
        },
        '.font-source': {
          fontFamily: '"Source Sans Pro", sans-serif',
        },
        '.bg-gold-gradient': {
          background: 'linear-gradient(180deg, #F9D39000 0%, #E2B15B44 100%)',
        },
        '.bg-gold-gradient-strong': {
          background: 'linear-gradient(180deg, #F9D39000 0%, #E2B15BFF 100%)',
        },
        '.bg-gold-gradient-sm': {
          background: 'linear-gradient(180deg, #F9D390 0%, #E2B15B 100%)',
        },
        '.bg-black-gradient': {
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.3) 65%, rgba(255,255,255,0) 100%)',
        },
        '.bg-gold-gradient-inv': {
          background: 'linear-gradient(0deg, #F9D39000 0%, #E2B15B66 140%)',
        },
        '.bg-gold': {
          background: 'var(--gold)',
        },
        '.bg-gold-light': {
          background: 'var(--gold-light)',
        },
        '.bg-bluepurple-gradient': {
          background: 'var(--black-blue-grad)',
        },
        '.bg-bluegreen-gradient': {
          background:
            'linear-gradient(180deg, #002452 -20%, rgba(0, 19, 44, 0.8) 100%)',
        },
        '.bg-goldblue-gradient': {
          background:
            'linear-gradient(180deg, #EEC377 0%, rgba(180, 158, 119, 0.685156) 48.44%, rgba(170, 152, 119, 0.63099) 56.77%, rgba(156, 142, 119, 0.54974) 69.27%, rgba(151, 139, 119, 0.524893) 73.44%, rgba(146, 136, 119, 0.496941) 78.12%, rgba(142, 134, 119, 0.47526) 81.76%, rgba(141, 133, 119, 0.46849) 81.77%, rgba(136, 130, 119, 0.441406) 85.94%, rgba(129, 125, 119, 0.404167) 91.67%, rgba(125, 123, 119, 0.383854) 94.79%, rgba(122, 121, 119, 0.366927) 97.4%, rgba(120, 120, 119, 0.356771) 99.99%, rgba(119, 119, 119, 0.35) 100%, rgba(119, 119, 119, 0.35) 100%, rgba(119, 119, 119, 0.35) 100%)',
        },

        '.bg-goldblue2-gradient': {
          background:
            'linear-gradient(102.38deg, rgba(24, 29, 49, 1) 20.81%, rgba(77, 81, 101, 1) 96.05%)',
        },
        '.bg-disable': {
          background: '#c2c2c2',
        },
        '.text-gold': {
          color: 'var(--gold)',
        },
        '.text-gold-light': {
          color: 'var(--gold-light)',
        },
        '.text-gold-gradient': {
          background:
            '-webkit-linear-gradient(180deg, #F9D390 0%, #E2B15B 100%)',
          ' -webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.text-disable': {
          color: '#767676',
        },
        '.border-gold-light': {
          borderColor: 'var(--gold-light)',
        },
        '.hole': {
          boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.6)',
        },
        '.writing-vertical-lr': {
          'writing-mode': 'vertical-lr',
        },
      }

      addUtilities(fonts)
    }),
  ],
}
