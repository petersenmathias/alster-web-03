<script lang="ts">
	import { cn } from '$lib/utils';
	import { cva, type VariantProps } from 'class-variance-authority';
	import type { SvelteHTMLElements } from 'svelte/elements';

	const gridVariants = cva('grid gap-2', {
		variants: {
			columns: {
				1: 'grid-cols-1',
				2: 'grid-cols-2',
				3: 'grid-cols-3',
				4: 'grid-cols-4',
				5: 'grid-cols-5',
				6: 'grid-cols-6',
				7: 'grid-cols-7',
				8: 'grid-cols-8',
				9: 'grid-cols-9',
				10: 'grid-cols-10',
				11: 'grid-cols-11',
				12: 'grid-cols-12'
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
			gap: {
				'': 'gap-y-2',
				sm: 'gap-y-2',
				md: 'gap-y-20 gap-x-8',
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
