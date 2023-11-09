import { join } from 'path'
import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin'

export default {
	
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {},
		colors: {
			'myColorLighter': '#7CA9BD',
			'myColorLight': '#4C829A',
			'myColorBase': '#316C85',
			'myColorDark': '#033B40',
			'myColorDarker': '#001618',
		},
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				preset: [
					'rocket',
					'wintry'
				],
			},
		}),
	],
} satisfies Config;
