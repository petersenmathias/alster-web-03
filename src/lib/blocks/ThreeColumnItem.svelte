<script lang="ts">
	import Grid from '$lib/components/Grid.svelte';
	import Body from '$lib/components/ui/Body.svelte';
	import { storyblokEditable } from '@storyblok/svelte';
	import type { StoyblokBlok } from '../../types/generics';
	import type { ThreeColumnItemStoryblok } from '../../types/storyblok';
	import SbMarkdownImage from './utils/SBMarkdownImage.svelte';

	const { blok }: StoyblokBlok<ThreeColumnItemStoryblok> = $props();
</script>

<div use:storyblokEditable={blok} class="flex w-full flex-col">
	<Grid class="border-foreground-light mb-12 flex-col gap-y-10 border-t pt-5 md:flex-row">
		<div class="col-span-6 md:col-span-6 lg:col-span-1">
			<h2 class="text-foreground text-md max-w-full md:text-lg">{blok.title}</h2>
		</div>
		<div class="col-span-6 md:col-span-6 lg:col-span-2 lg:col-start-3">
			<Body
				markdown={blok.column1}
				markdownRenderers={{ image: SbMarkdownImage }}
				class="max-w-full gap-4 md:gap-6"
			/>
		</div>
		<div class="col-span-6 md:col-span-12 lg:col-span-6 lg:col-start-6">
			<Body
				markdown={blok.column2}
				markdownRenderers={{ image: SbMarkdownImage }}
				class="max-w-full gap-4 md:gap-6"
			/>
		</div>
	</Grid>
</div>
