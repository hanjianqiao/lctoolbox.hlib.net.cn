// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '闪调工具箱',
			pagefind: false,
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Lanchitour/LCToolbox-Feedback/issues' }],
			sidebar: [
				{
					label: '使用说明',
					autogenerate: { directory: 'tutorial' },
				},
			],
		}),
	],
});
