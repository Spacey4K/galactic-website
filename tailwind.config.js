/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")

module.exports = {
    content: [
        "./docs/index.html",
        "./docs/thanks.html",
    ],
    theme: {
        extend: {
            colors: {
                "dark-bg": "#111827",
                "secondary-bg": colors.slate[600],
                "discord": "#36393f",
                "brand": "#2eaeff",
                "highlight": colors.slate[700],
                "transparent": "rgba(0, 0, 0, .3)",
            }
        },
    },
    plugins: [],
}