<script lang="ts">
	import { cn } from '$lib/utils';
	import { cva, type VariantProps } from 'class-variance-authority';
	import type { SvelteHTMLElements } from 'svelte/elements';

	const gridVariants = cva('grid grid-cols-6 md:grid-cols-12', {
		variants: {
			// these are disabled (with the "d-" prefix) to avoid conflicts with storyblok/responsiveness
			columns: {
				1: 'd-grid-cols-1',
				2: 'd-grid-cols-2',
				3: 'd-grid-cols-3',
				4: 'd-grid-cols-4',
				5: 'd-grid-cols-5',
				6: 'd-grid-cols-6',
				7: 'd-grid-cols-7',
				8: 'd-grid-cols-8',
				9: 'd-grid-cols-9',
				10: 'd-grid-cols-10',
				11: 'd-grid-cols-11',
				12: 'd-grid-cols-12'
			},
			align: {
				start: 'items-start',
				center: 'items-center',
				end: 'items-end'
			},
			justify: {
				start: 'justify-items-start',
				center: 'justify-items-center',
				end: 'justify-items-end',
				stretch: 'justify-items-stretch'
			},
			// the gaps should be disabled since they conflict with storyblok/responsiveness
			gap: {
				'': 'gap-y-2',
				sm: 'gap-y-2',
				md: 'gap-x-4 gap-y-6 md:gap-y-10 md:gap-x-6',
				lg: 'gap-y-30'
			}
		},
		defaultVariants: {
			columns: 12,
			align: 'start',
			justify: 'start',
			gap: 'md'
		}
	});

	type Props = {} & SvelteHTMLElements['div'] & VariantProps<typeof gridVariants>;

	let { children, class: className, columns, align, justify, gap, ...rest }: Props = $props();
</script>

<div class={cn(gridVariants({ columns, align, justify, gap }), className)} {...rest}>
	{@render children?.()}
</div>
