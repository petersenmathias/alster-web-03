<script lang="ts">
	import { cn, storyBlokSrcSet } from '$lib/utils';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import Image from './ui/Image.svelte';
	import Video from './ui/Video.svelte';

	type Props = {
		src: string;
		class?: string;
		style?: string;
	} & SvelteHTMLElements['img'] &
		SvelteHTMLElements['video'];

	const { src, alt, class: className, ...rest }: Props = $props();
	const isVideoAsset = $derived(src?.endsWith('.mp4'));
	const srcset = $derived(storyBlokSrcSet(src));
</script>

{#if isVideoAsset}
	<Video
		class={cn(className, 'h-full w-full object-cover object-center')}
		loop
		autoplay
		muted
		playsinline
		{src}
		{...rest}
	/>
{:else}
	<Image
		{src}
		{alt}
		loading="lazy"
		class={cn(className, 'w-full object-cover object-center')}
		{srcset}
		{...rest}
	/>
{/if}
