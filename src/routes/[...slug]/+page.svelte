<script lang="ts">
	import Meta from '$lib/components/Meta.svelte';
	import { useStoryblok } from '$lib/storyblok';
	import { StoryblokComponent, useStoryblokBridge } from '@storyblok/svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
	let story = $state(data.story);

	onMount(async () => {
		await useStoryblok();

		useStoryblokBridge(
			data.story.id,
			(newStory) => {
				story.content = newStory.content;
			},
			{
				preventClicks: true,
				resolveLinks: 'url'
			}
		);
	});
	$effect(() => {
		story = data.story;
	});
</script>

<Meta title={`${story.name} - Alster`} />

{#if story}
	{#key story.id}
		<StoryblokComponent blok={story.content} />
	{/key}
{/if}
