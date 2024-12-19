/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{js,ts,html}', './index.html',],
	theme: {
		extend: {},
		screens: {
			sd: '350px',

			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '740px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px'
			// => @media (min-width: 1536px) { ... }
		},
		colors: {
			...colors,
			bone: '#fff7eb',
			lightgreen: '#baa89b',
			midgreen: '#b0896a',
			darkgreen: '#DC965A'
		}
	},
	plugins: [require('tailwind-scrollbar-hide')]
};
