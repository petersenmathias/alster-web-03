<script lang="ts">
	import Media from '$lib/components/Media.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import { storyblokEditable } from '@storyblok/svelte';
	import type { StoyblokBlok } from '../../types/generics';
	import type { CardStoryblok } from '../../types/storyblok';

	const { blok }: StoyblokBlok<CardStoryblok> = $props();
</script>

<div use:storyblokEditable={blok} class="w-full">
	<Card href={`/${blok.link?.cached_url}`} title={blok.title} label={blok.label}>
		{#if blok.body}
			<p class="opacity-100">{blok.body}</p>
		{/if}

		<Media class="max-h-[80vh]" src={blok.media.filename ?? ''} alt={blok.media.alt} />
	</Card>
</div>
