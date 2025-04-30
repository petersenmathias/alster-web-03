import { PUBLIC_ACCESS_TOKEN, PUBLIC_VERSION } from '$env/static/public';
import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';

export async function useStoryblok(accessToken = '') {
	storyblokInit({
		accessToken: accessToken === '' ? PUBLIC_ACCESS_TOKEN : accessToken,

		use: [apiPlugin],
		bridge: true,

		components: {
			// @ts-ignore
			page: (await import('$lib/blocks/Page.svelte')).default, // @ts-ignore
			hero: (await import('$lib/blocks/Hero.svelte')).default, // @ts-ignore
			section: (await import('$lib/blocks/Section.svelte')).default, // @ts-ignore
			title: (await import('$lib/blocks/Title.svelte')).default, // @ts-ignore
			column: (await import('$lib/blocks/Column.svelte')).default, // @ts-ignore
			text: (await import('$lib/blocks/Text.svelte')).default, // @ts-ignore
			media: (await import('$lib/blocks/Media.svelte')).default, // @ts-ignore
			card: (await import('$lib/blocks/Card.svelte')).default, // @ts-ignore
			accordion: (await import('$lib/blocks/Accordion.svelte')).default, // @ts-ignore
			logos: (await import('$lib/blocks/Logos.svelte')).default, // @ts-ignore
			info_item: (await import('$lib/blocks/InfoItem.svelte')).default
		},
		apiOptions: {
			https: true
		}
	});
}

export async function useStoryblokLoad(story: string) {
	await useStoryblok();
	const storyblokApi = await useStoryblokApi();
	const version =
		PUBLIC_VERSION === 'published' || PUBLIC_VERSION === 'draft' ? PUBLIC_VERSION : 'published';

	return storyblokApi
		.get(`cdn/stories/${story}`, {
			version
		})
		.catch((error) => {
			return {
				story: {},
				error: error
			};
		});
}
