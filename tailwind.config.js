/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    gridTemplateColumns:{
      grid: 'repeat(auto-fit, minmax(250px,1fr))',
    },

    extend: {
      colors:{
        black:'#0f0f0f',
        yt_red: '#ff0300',
        white: '#f1f1f1',
        light_black: '#272727',
        light_black_1: '#1a1a1a',
        light: '#181818',
        light_1: '#212121',
        gray:'gray',
      },
      screens:{
        sm: '400px',
        xsm: '420px',
        smd: '620px',
      }
    },
  },
  plugins: [],
}