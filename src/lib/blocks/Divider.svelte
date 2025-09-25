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
				md: 'h-20',
				lg: 'h-40'
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
