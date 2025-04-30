<script lang="ts">
	import Media from '$lib/components/Media.svelte';
	import Section from '$lib/components/Section.svelte';
	import Body from '$lib/components/ui/Body.svelte';
	import { cn, storyBlokSrcSet } from '$lib/utils';
	import { storyblokEditable } from '@storyblok/svelte';
	import { cva } from 'class-variance-authority';
	import type { StoyblokBlok } from '../../types/generics';
	import type { HeroStoryblok } from '../../types/storyblok';

	const { blok }: StoyblokBlok<HeroStoryblok> = $props();
	const { layout } = blok;

	const heroVariants = cva('', {
		variants: {
			layout: {
				stacked: 'flex flex-col gap-8 text-foreground max-h-screen text-2xl px-6 mt-36',
				ontop: 'grid grid-rows-1 grid-cols-1 items-end text-background max-h-screen text-8xl '
			}
		},
		defaultVariants: {
			layout: 'stacked'
		}
	});
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
<Section class="relative z-0 mt-0 w-full overflow-hidden p-0">
	<div use:storyblokEditable={blok} class={heroVariants({ layout })}>
		<div
			class={cn(
				'relative z-10 col-1 row-1 flex flex-col gap-2',
				layout === 'ontop' ? 'px-6 pb-12' : ''
			)}
		>
			{#if blok.title}
				<h1>{blok.title}</h1>
			{/if}
			{#if blok.body}
				<Body size="md" text={blok.body} />
			{/if}
		</div>

		{#if blok.asset?.filename}
			<Media
				src={blok.asset.filename}
				alt={blok.asset.alt ?? ''}
				class="col-1 row-1"
				loading="eager"
			/>
		{/if}
	</div>
</Section>
