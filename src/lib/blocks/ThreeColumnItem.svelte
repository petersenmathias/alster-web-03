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
		<div class="col-span-6 md:col-span-2">
			<h2 class="text-foreground text-md max-w-full md:text-lg">{blok.title}</h2>
		</div>
		<div class="col-span-6 md:col-span-3">
			<Body
				markdown={blok.column1}
				markdownRenderers={{ image: SbMarkdownImage }}
				class="max-w-full md:max-w-100"
			/>
		</div>
		<div class="col-span-6 md:col-span-7">
			<Body
				markdown={blok.column2}
				markdownRenderers={{ image: SbMarkdownImage }}
				class="max-w-full md:max-w-170"
			/>
		</div>
	</Grid>
</div>
