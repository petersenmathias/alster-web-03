<script lang="ts">
	import Media from '$lib/components/Media.svelte';
	import Section from '$lib/components/Section.svelte';
	import Body from '$lib/components/ui/Body.svelte';
	import { cn, storyBlokSrcSet } from '$lib/utils';
	import { storyblokEditable } from '@storyblok/svelte';
	import type { StoyblokBlok } from '../../types/generics';
	import type { HeroStoryblok } from '../../types/storyblok';

	const { blok }: StoyblokBlok<HeroStoryblok> = $props();
</script>

<svelte:head>
	{#if blok.asset?.filename}
		<link
			rel="preload"
			as="image"
			fetchpriority="high"
			imagesizes="100vw"
			imagesrcset={storyBlokSrcSet(blok.asset.filename)}
		/>
	{/if}
</svelte:head>

<div use:storyblokEditable={blok}>
	<Section class="flex w-full flex-col gap-8 px-4 md:px-6">
		{#if blok.asset?.filename}
			<Media
				playsinline={true}
				autoplay={true}
				loop={true}
				muted={true}
				hideControls={true}
				src={blok.asset.filename}
				alt={blok.asset.alt ?? ''}
				class="col-1 row-1 max-h-[80svh]"
				loading="eager"
			/>
		{/if}
		<header class={cn(`relative z-10 col-1 row-1 flex flex-col gap-8`)}>
			{#if blok.title}
				<h1 class="text-responsive">{blok.title}</h1>
			{/if}
			{#if blok.body && blok.body !== ``}
				<Body text={blok.body} />
			{/if}
		</header>
	</Section>
</div>
