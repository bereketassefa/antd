/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors:{
         primary: 'rgb(50 34 198)',
         secondary: 'rgb(215 26 98)',
         background: '',
         lightBg: 'rgb(241, 241, 241)',
         cards: 'white',
         topbarBg: '#FFF',
         lightPrimaryHover: 'rgba(50, 34, 198, 0.10)',
         notificationCardBg: 'rgba(50, 34, 198, 0.10)'
         
       },
       fontFamily: {
          
       },
       fontSize:{
         largeT: '20px',
         midT: '18px',
         smallT: '16px',
         largeP: '15px',
         midP: '14',
         smallP: '13px'
       },
       width:{
         //primary layout config
          maxWidth: '1120px'
       },
       height:{
          //top bar config
           topbarH: '65px',
       }
    },
  },
  plugins: [],
}

