const defaultTheme = require('tailwindcss/defaultTheme');
const colors =require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
      fontFamily:{
        primary: "Playfair Display",
        body: 'work Sans'
      },
      container:{
        padding:{
            DEFAULT : "1rem",
            lg:"3rem"
        }
      },
      extend: {
        colors:{
            'light-primary': '#525252 ',
            'light-secondary': '#414141',
            'light-third': '#313131',
            'light-fourth': '#18122B',
            'dark-primary': '#000000',
            'dark-secondary': '#3E432E',
            'dark-third': '#616F39',
            'dark-fourth': '#A7D129',
            accent:{
                DEFAULT:"#ac6b34",
                hover: "#925a2b",
            },
            paragraph: "#878e99",
            blue: colors.blue,
            indigo: colors.indigo,
            red:colors.red
        },
      },
    },

    plugins: [require('@tailwindcss/forms')],
};
