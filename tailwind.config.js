module.exports = {
	content: [
		'./_drafts/**/*.html',
		'./_includes/**/*.html',
		'./_layouts/**/*.html',
		'./_posts/*.md',
		'./*.md',
		'./*.html',
	],
	theme: {
		extend: {
			colors: {
				'accent': '#c30000',
				'primary': '#91E543'
			},
			fontFamily: {
				'sans': ['"Nunito"', 'ui-sans-serif', 'system-ui'],
				'body': ['"Nunito"', 'sans-serif'],
			}
		},
	},
	plugins: [require('@tailwindcss/typography'),]
}
