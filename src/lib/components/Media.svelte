<script lang="ts">
	import { cn, storyBlokSrcSet } from '$lib/utils';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import Image from './ui/Image.svelte';
	import Video from './ui/Video.svelte';

	type Props = {
		src: string;
		hideControls?: boolean;
		class?: string;
		style?: string;
	} & SvelteHTMLElements['img'] &
		SvelteHTMLElements['video'];

	const {
		src,
		alt,
		loop,
		autoplay,
		muted,
		playsinline,
		loading = 'lazy',
		hideControls = false,
		class: className
	}: Props = $props();

	const isVideoAsset = $derived(src?.endsWith('.mp4'));
	const srcset = $derived(storyBlokSrcSet(src));
</script>

{#if isVideoAsset}
	<Video
		{loop}
		{autoplay}
		{muted}
		{playsinline}
		{src}
		{hideControls}
		class={cn('h-full w-full object-cover object-center', className)}
	/>
{:else}
	<Image
		{src}
		{alt}
		{loading}
		{srcset}
		class={cn('w-full object-cover object-center', className)}
	/>
{/if}
