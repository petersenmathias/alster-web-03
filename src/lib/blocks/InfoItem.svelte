<script lang="ts">
	import Body from '$lib/components/ui/Body.svelte';
	import PowerItem from '$lib/components/ui/PowerItem.svelte';
	import { storyblokEditable } from '@storyblok/svelte';
	import type { StoyblokBlok } from '../../types/generics';
	import type { InfoItemStoryblok } from '../../types/storyblok';
	import SbMarkdownImage from './utils/SBMarkdownImage.svelte';

	const { blok }: StoyblokBlok<InfoItemStoryblok> = $props();
</script>

<div use:storyblokEditable={blok} class="info-item flex w-full flex-col gap-10">
	<PowerItem>
		{#snippet trigger()}
			{blok.title}
		{/snippet}
		<Body markdown={blok.content} markdownRenderers={{ image: SbMarkdownImage }} />
	</PowerItem>
</div>

<style>
	.info-item :global(img) {
		max-width: 250px;
	}
	.info-item :global(p) {
		opacity: 1;
		display: flex;
		align-items: end;
		flex-flow: column;
	}
</style>
