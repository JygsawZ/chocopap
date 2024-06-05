/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            forms: {
                default: {
                    input: {
                        backgroundColor: 'white',
                        '&:focus': {
                            backgroundColor: 'gray.100',
                        },
                    },
                    select: {
                        backgroundColor: 'white',
                        '&:focus': {
                            backgroundColor: 'gray.100',
                        },
                    },
                    checkbox: {
                        backgroundColor: 'white',
                        '&:focus': {
                            backgroundColor: 'gray.100',
                        },
                    },
                },
            }, // Ajout d'une virgule ici
            colors: {
                'choco': '#B65F28',
                'Yell': '#FFD543',
                'White': '#FFFFFF',
            },
            fontFamily: {
                'fjalla': ['Fjalla One', 'sans-serif'],
                'droid': ['Droid Serif', 'serif']
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
} // Ajout d'une accolade fermante ici