<script lang="ts">
	import { StoryblokComponent } from '@storyblok/svelte';
	import type { StoyblokBlok } from '../../types/generics';
	import type { PageStoryblok } from '../../types/storyblok';

	let { blok }: StoyblokBlok<PageStoryblok> = $props();
</script>

{#if blok.hero}
	{#each blok.hero as item}
		<StoryblokComponent blok={item} />
	{/each}
{/if}

{#if blok.content}
	{#each blok.content as item}
		<StoryblokComponent blok={item} />
	{/each}
{/if}
