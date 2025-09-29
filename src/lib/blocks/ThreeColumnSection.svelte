<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import { storyblokEditable } from '@storyblok/svelte';
	import type { StoyblokBlok } from '../../types/generics';
	import type { ThreeColumnSectionStoryblok } from '../../types/storyblok';
	import ThreeColumnItem from './ThreeColumnItem.svelte';

	const { blok }: StoyblokBlok<ThreeColumnSectionStoryblok> = $props();
</script>

<div use:storyblokEditable={blok} class="flex w-full flex-col gap-10">
	<Section title={blok.title} class="w-full px-4 md:px-6">
		{#if blok.items && Array.isArray(blok.items)}
			{#each blok.items as item (item._uid)}
				<ThreeColumnItem blok={item} />
			{/each}
		{/if}
	</Section>
</div>
