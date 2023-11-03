/** @type {import('tailwindcss').Config} */

export default {
  mode: "jit",
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 ////// public contents
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(50 34 198)",
        secondary: "rgb(215 26 98)",
        background: "",
        lightBg: "rgb(241, 241, 241)",
        cards: "white",
        topbarBg: "#FFF",
        lightPrimaryHover: "rgba(50, 34, 198, 0.10)",
        notificationCardBg: "rgba(50, 34, 198, 0.10)",
        //////////// Puplic file//////////
        transparent: "transparent",
        current: "currentColor",
        addisblue: "#3222c6",
        addispink: "#d71a62",
        pinkhover: "#CE346F",
        white: "#ffffff",
        addisbg: "#454262",
        addishover: "#F60B65",
        gradientdark: "rgba(69, 66, 98, 1)",
        gradientlight: "rgba(69, 66, 98, 0.5)",
        gradientlightmobile: "rgba(69, 66, 98, 0.8)",
        addisgradient1: "rgba(45, 38, 111, 0.9)",
        addisgradient2: "rgba(215, 26, 98, 0.3)",
      },

      ////////// Public screens/////////
      screens: {
        ssm: "440px",
        mmd: "900px",
        mdm: "1080px",
        'max-sm': {'max': '640px'},
        'lg-sm': {'min': '640px', 'max': '1023px'},
      },

      ///////// Public animation /////

      animation: {
        updown: "updown 3s ease-in-out infinite",
        updown1: "updown1 4s ease-in-out infinite",
        updown2: "updown1 3s ease-in-out infinite",
        updown3: "updown1 4s ease-in-out infinite",
      },

      ///// Adding custom shaodw /////

      boxShadow: {
        'nav-shadow': '0 69px 6px -1px rgba(0, 0, 0, 0.1)'
      },
      
      //// Public Keyframes////

      keyframes: {
        updown: {
          0: {
            transform: "translateY(-30px)",
          },

          "50%": {
            transform: "translateY(15px)",
          },
        },
        updown1: {
          0: {
            transform: "translateY(-20px)",
          },

          "50%": {
            transform: "translateY(10px)",
          },
        },
        updown2: {
          0: {
            transform: "translateY(-10px)",
          },

          "50%": {
            transform: "translateY(5px)",
          },
        },
        updown3: {
          0: {
            transform: "translateY(-1px)",
          },

          "50%": {
            transform: "translateY(0px)",
          },
        },
      },

      fontFamily: {},
      fontSize: {
        largeT: "20px",
        midT: "18px",
        smallT: "16px",
        largeP: "15px",
        midP: "14",
        smallP: "13px",
      },
      width: {
        //primary layout config
        maxWidth: "1120px",
      },
      height: {
        //top bar config
        topbarH: "65px",
      },
    },
  },
  plugins: [],
};
