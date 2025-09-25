<script lang="ts">
	import Grid from '$lib/components/Grid.svelte';
	import Section from '$lib/components/Section.svelte';
	import { StoryblokComponent, storyblokEditable } from '@storyblok/svelte';
	import type { StoyblokBlok } from '../../types/generics';
	import type { SectionStoryblok } from '../../types/storyblok';

	const { blok }: StoyblokBlok<SectionStoryblok> = $props();
</script>

<div use:storyblokEditable={blok}>
	<Section title={blok.title}>
		<Grid>
			{#if blok.columns}
				{#each blok.columns as column}
					<StoryblokComponent blok={column} />
				{/each}
			{/if}
		</Grid>
	</Section>
</div>
