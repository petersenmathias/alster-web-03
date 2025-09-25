<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';

	type Props = { title?: Snippet | string } & SvelteHTMLElements['section'];

	let { children, title, class: className, ...rest }: Props = $props();
</script>

<section class={cn(className)} {...rest}>
	{#if title}
		<header
			class="text-foreground text-md sticky top-18 z-10 grid grid-cols-[auto_1fr] items-center gap-4 mix-blend-difference md:text-lg"
		>
			<h2>
				{title}
			</h2>
		</header>
	{/if}
	{@render children?.()}
</section>
