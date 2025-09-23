<script lang="ts">
	import Grid from '$lib/components/Grid.svelte';
	import Logo from '$lib/components/ui/Logo.svelte';
	import { StoryblokComponent } from '@storyblok/svelte';
	import type { ColumnStoryblok } from '../../types/storyblok';

	type Props = {
		columns: ColumnStoryblok[];
	};

	let { columns }: Props = $props();
</script>

<footer class="mt-10 flex flex-col gap-12 p-6 py-10">
	<Grid class="grid-cols-1 gap-10 md:grid-cols-12">
		{#each columns ?? [] as item}
			<StoryblokComponent blok={item} />
		{/each}

		<div
			class="col-span-3 row-span-1 row-start-auto mt-[15px] flex w-full flex-row items-center justify-between gap-4 self-end justify-self-end md:w-auto md:flex-col md:items-end md:justify-end"
		>
			<div
				class="body text-md mr-auto flex max-w-lg flex-col gap-1 md:items-end md:justify-end md:self-end md:text-lg"
			>
				<p>
					&copy; {new Date().getFullYear()} Alster
					<span class="relative -top-[10px] text-[6px]">TM</span>
				</p>
			</div>
			<div class="relative -top-[5px] block flex-shrink-0 md:hidden">
				<Logo color="var(--color-foreground)" />
			</div>
		</div>
	</Grid>
</footer>
