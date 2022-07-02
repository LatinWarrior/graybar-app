/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                customDarkGreen: '#076140',
                customLightGray: '#9BB0A4',
                customDarkGray: '#687B71',
                customDarkBlue: '#005D89',
                customMediumBlue: '#298FBF',
            },
        },
    },
    safelist: [
        {
            pattern: /./,
        },
    ],
    plugins: [require('daisyui')],
};
