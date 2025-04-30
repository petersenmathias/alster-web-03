<script lang="ts">
	import Media from '$lib/components/Media.svelte';
	import { storyblokEditable } from '@storyblok/svelte';
	import type { StoyblokBlok } from '../../types/generics';
	import type { MediaStoryblok } from '../../types/storyblok';

	const { blok }: StoyblokBlok<MediaStoryblok> = $props();
</script>

<div use:storyblokEditable={blok} class="w-full">
	<Media src={blok.asset.filename ?? ''} alt={blok.asset.alt ?? ''} />
</div>
