/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			height: {
				maximum: '598px',
			},
		},
		screens: {
			mobile: '320px',
			// => @media (min-width: 320px) { ... }
			tablet: '800px',
			// => @media (min-width: 1024px) { ... }
			laptop: '1280px',
			// => @media (min-width: 1280px) { ... }
			desktop: '1680px',
			// => @media (min-width: 1600px) { ... }
		},
	},
}
