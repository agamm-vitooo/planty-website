/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            spacing: {
                '100': '368px',
                '150': '577px'
            }
        },
    },
    plugins: [require("daisyui")],
}