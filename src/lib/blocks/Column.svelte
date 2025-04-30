<script lang="ts">
	import { StoryblokComponent, storyblokEditable } from '@storyblok/svelte';
	import { cva } from 'class-variance-authority';
	import type { StoyblokBlok } from '../../types/generics';
	import type { ColumnStoryblok } from '../../types/storyblok';

	const { blok }: StoyblokBlok<ColumnStoryblok> = $props();

	const colVariants = cva('w-full flex flex-col gap-4', {
		variants: {
			columns: {
				1: 'col-span-1',
				2: 'col-span-2',
				3: 'col-span-3',
				4: 'col-span-4',
				5: 'col-span-5',
				6: 'col-span-6',
				7: 'col-span-7',
				8: 'col-span-8',
				9: 'col-span-9',
				10: 'col-span-10',
				11: 'col-span-11',
				12: 'col-span-12'
			},
			justify: {
				start: 'justify-self-start items-start',
				center: 'justify-self-center items-center',
				end: 'justify-self-end items-end'
			},
			align: {
				start: 'self-start justify-start',
				center: 'self-center  justify-center',
				end: 'self-end items-end justify-end'
			},
			sticky: {
				true: 'sticky top-4 z-10',
				false: ''
			}
		},
		defaultVariants: {
			columns: 6,
			sticky: false
		}
	});
</script>

<div
	use:storyblokEditable={blok}
	class={colVariants({
		justify: blok.justify || 'start',
		align: blok.align || 'start',
		sticky: blok.sticky || false,
		columns: parseInt(blok.cols ?? '6') as
			| 1
			| 2
			| 3
			| 4
			| 5
			| 6
			| 7
			| 8
			| 9
			| 10
			| 11
			| 12
			| undefined
	})}
>
	{#if blok.block}
		{#each blok.block as block}
			<StoryblokComponent blok={block} />
		{/each}
	{/if}
</div>
