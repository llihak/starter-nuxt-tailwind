module.exports = {
	content: [
		'./components/**/*.{vue,js,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
	],
	theme: {
		fontFamily: {
			poppins: 'Poppins, sans-serif',
		},
		extend: {},
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
};
