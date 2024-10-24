/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'header': '#dbf96c',
				'body': '#ffcb05'
			}
		},
	},
	plugins: [typography],
}
