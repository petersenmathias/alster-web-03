<script lang="ts">
	import Grid from '$lib/components/Grid.svelte';
	import { StoryblokComponent } from '@storyblok/svelte';
	import type { ColumnStoryblok } from '../../types/storyblok';

	type Props = {
		columns: ColumnStoryblok[];
	};

	let { columns }: Props = $props();
</script>

<footer class="mt-10 flex flex-col gap-12 px-4 py-10 md:px-6">
	<Grid class="grid-cols-1 gap-10 md:grid-cols-12">
		{#each columns ?? [] as item}
			<StoryblokComponent blok={item} />
		{/each}

		<div
			class="absolute col-span-3 row-span-1 row-start-auto mt-[15px] flex w-full flex-col items-end justify-end gap-4 self-end justify-self-end"
		>
			<div
				class="body text-md flex max-w-lg flex-col items-end justify-end gap-1 self-end md:text-lg"
			>
				<p>
					&copy; {new Date().getFullYear()} Alster
					<span class="relative -top-[10px] text-[6px]">TM</span>
				</p>
			</div>
		</div>
	</Grid>
</footer>
