/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Roboto Slab", "Roboto"],
			},
		},
	},
	plugins: [require("daisyui")],
};
