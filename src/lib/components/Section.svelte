<script lang="ts">
	import { cn } from '$lib/utils';
	import { cva, type VariantProps } from 'class-variance-authority';
	import type { Snippet } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';

	const sectionVariants = cva('px-6 relative flex flex-col gap-6', {
		variants: {
			border: {
				true: 'before:border-foreground before:border-t-1  before:block',
				false: null
			}
		},

		defaultVariants: {
			border: false
		}
	});

	type Props = { title?: Snippet | string } & SvelteHTMLElements['section'] &
		VariantProps<typeof sectionVariants>;

	let { children, border, title, class: className, ...rest }: Props = $props();
</script>

<section class={cn(sectionVariants({ border: border && !title }), className)} {...rest}>
	{#if title}
		<header
			class="text-foreground sticky top-18 z-10 grid grid-cols-[auto_1fr] items-center gap-4 text-lg mix-blend-difference"
		>
			<h2>
				{title}
			</h2>
		</header>
	{/if}
	{@render children?.()}
</section>
