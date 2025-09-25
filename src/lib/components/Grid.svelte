<script lang="ts">
	import { cn } from '$lib/utils';
	import { cva, type VariantProps } from 'class-variance-authority';
	import type { SvelteHTMLElements } from 'svelte/elements';

	const gridVariants = cva(
		'grid grid-cols-6 md:grid-cols-12 gap-x-4 gap-y-6 md:gap-y-10 md:gap-x-6',
		{
			variants: {
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
				}
			},
			defaultVariants: {
				align: 'start',
				justify: 'start'
			}
		}
	);

	type Props = {} & SvelteHTMLElements['div'] & VariantProps<typeof gridVariants>;

	let { children, class: className, align, justify, ...rest }: Props = $props();
</script>

<div class={cn(gridVariants({ align, justify }), className)} {...rest}>
	{@render children?.()}
</div>
