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
            'light-primary': '#00FFAB',
            'light-secondary': '#14C38E',
            'light-third': '#B8F1B0',
            'light-fourth': '#E3FCBF',
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
