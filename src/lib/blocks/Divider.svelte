<script lang="ts">
	import { storyblokEditable } from '@storyblok/svelte';
	import type { StoyblokBlok } from '../../types/generics';
	import type { DividerStoryblok } from '../../types/storyblok';

	const { blok }: StoyblokBlok<DividerStoryblok> = $props();

	const sizeClass = blok.size === 'lg' ? 'h-40' : blok.size === 'md' ? 'h-20' : '';
	const borderClass = blok.border ? 'border-t border-foreground-light' : '';
</script>

<div use:storyblokEditable={blok} class={`w-full ${sizeClass} ${borderClass}`}></div>
