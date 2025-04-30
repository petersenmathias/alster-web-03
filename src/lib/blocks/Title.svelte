<script lang="ts">
	import { cn } from '$lib/utils';
	import { storyblokEditable } from '@storyblok/svelte';
	import type { StoyblokBlok } from '../../types/generics';
	import type { TitleStoryblok } from '../../types/storyblok';

	const { blok }: StoyblokBlok<TitleStoryblok> = $props();
</script>

<div use:storyblokEditable={blok}>
	<h2 class={cn(blok.responsive ? 'text-responsive' : 'text-3xl')}>{blok.text}</h2>
</div>
