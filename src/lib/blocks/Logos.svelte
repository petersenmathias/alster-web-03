<script lang="ts">
	import Media from '$lib/components/Media.svelte';
	import { storyblokEditable } from '@storyblok/svelte';
	import type { StoyblokBlok } from '../../types/generics';
	import type { LogosStoryblok } from '../../types/storyblok';

	const { blok }: StoyblokBlok<LogosStoryblok> = $props();
</script>

<div
	use:storyblokEditable={blok}
	class="mt-8 grid w-full grid-cols-[repeat(5,minmax(40px,80px))] justify-around gap-24"
>
	{#if blok.items}
		{#each blok.items as item}
			<Media src={item.asset.filename ?? ''} alt={item.asset.alt ?? ''} class="self-center" />
		{/each}
	{/if}
</div>
