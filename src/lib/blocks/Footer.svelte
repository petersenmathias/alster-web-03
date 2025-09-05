<script lang="ts">
	import Grid from '$lib/components/Grid.svelte';
	import { StoryblokComponent } from '@storyblok/svelte';
	import type { ColumnStoryblok } from '../../types/storyblok';
	import Logo from '../components/ui/Logo.svelte';

	type Props = {
		columns: ColumnStoryblok[];
	};

	let { columns }: Props = $props();
</script>

<footer class="mt-10 flex flex-col gap-12 p-6 py-10">
	<Grid class="gap-10">
		{#each columns ?? [] as item}
			<StoryblokComponent blok={item} />
		{/each}
	</Grid>
	<Logo color="var(--color-background)" />
</footer>
