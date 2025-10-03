<script lang="ts">
	import Media from '$lib/components/Media.svelte';
	import { storyblokEditable } from '@storyblok/svelte';
	import type { StoyblokBlok } from '../../types/generics';
	import type { LogosStoryblok } from '../../types/storyblok';

	const { blok }: StoyblokBlok<LogosStoryblok> = $props();
</script>

<div
	use:storyblokEditable={blok}
	class="grid w-full grid-cols-3 justify-around gap-x-4 gap-y-4 md:grid-cols-6 md:gap-x-6 md:gap-y-6"
>
	{#if blok.items}
		{#each blok.items as item}
			<Media
				src={item.asset.filename ?? ''}
				alt={item.asset.alt ?? ''}
				class="border-foreground-light aspect-square w-full self-center border object-contain p-2 md:p-4 lg:p-8 xl:p-16"
			/>
		{/each}
	{/if}
</div>
