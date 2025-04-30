import type { PageLoad } from './$types';

import { useStoryblokLoad } from '$lib/storyblok';

export const load: PageLoad = async ({ params }) => {
	const slug = params.slug ?? 'home';

	return await useStoryblokLoad(slug.length ? slug : 'home').then((dataStory) => {
		return {
			story: 'data' in dataStory ? dataStory.data.story : {},
			error: false
		};
	});
};
