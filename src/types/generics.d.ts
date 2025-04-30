import type { PageData } from './$types';

export interface StoyblokBlok<T> {
	blok: T;
}

export interface StoryblokPageData<T> extends PageData {
	story: { content: T };
}
