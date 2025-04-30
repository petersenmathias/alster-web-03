<script lang="ts">
	import Grid from '$lib/components/Grid.svelte';
	import Accordion from '$lib/components/ui/Accordion.svelte';
	import { StoryblokComponent, storyblokEditable } from '@storyblok/svelte';
	import type { StoyblokBlok } from '../../types/generics';
	import type { AccordionStoryblok } from '../../types/storyblok';

	const { blok }: StoyblokBlok<AccordionStoryblok> = $props();
</script>

<div use:storyblokEditable={blok} class="w-full">
	<Accordion>
		{#snippet trigger()}
			{blok.title}
		{/snippet}

		{#if blok.blocks}
			<Grid>
				{#each blok.blocks as item}
					<StoryblokComponent blok={item} />
				{/each}
			</Grid>
		{/if}
	</Accordion>
</div>
