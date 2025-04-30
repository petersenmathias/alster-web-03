import { useStoryblokLoad } from '$lib/storyblok';
import type { PageLoad } from './[...slug]/$types';

export const load: PageLoad = async () => {
	return await useStoryblokLoad('config').then((dataStory) => {
		return {
			story: 'data' in dataStory ? dataStory.data.story : {},
			error: false
		};
	});
};
