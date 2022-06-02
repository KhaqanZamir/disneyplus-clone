module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        'white' : '#f9f9f9',
        'white-trans' : 'rgba(249, 249, 249, 0.1)',
        'blue' : '#0063e5',
        'blue-1' : '#0483ee',
        'black' : '#040714',
        'black-1' : '#090b13',
      },
      boxShadow:{
        'shadow1' : 'rgb(0 0 0/69%) 0px 26px 30px -10px, rgb(0 0 0/73%) 0px 16px 10px -10px',
      }
    },
  },
  plugins: [],
}