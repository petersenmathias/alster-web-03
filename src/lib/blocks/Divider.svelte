<script lang="ts">
	import { storyblokEditable } from '@storyblok/svelte';
	import { cva } from 'class-variance-authority';
	import type { StoyblokBlok } from '../../types/generics';
	import type { DividerStoryblok } from '../../types/storyblok';

	const { blok }: StoyblokBlok<DividerStoryblok> = $props();

	const dividerVariants = cva('w-full', {
		variants: {
			size: {
				sm: '',
				md: 'md:h-9 h-8',
				lg: 'md:h-18 h-16'
			},
			border: {
				true: 'border-t border-foreground-light',
				false: ''
			}
		},
		defaultVariants: {
			size: 'md',
			border: false
		}
	});
</script>

<div
	use:storyblokEditable={blok}
	class={dividerVariants({ size: blok.size, border: blok.border })}
></div>
