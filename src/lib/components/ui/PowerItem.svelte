<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { fade } from 'svelte/transition';

	type Props = {
		trigger: Snippet;
		children: Snippet;
		open?: boolean;
	} & SvelteHTMLElements['div'];

	let { open = $bindable(false), trigger, children, class: className, ...rest }: Props = $props();

	const handleHover = () => (open = !open);
</script>

<div
	class={cn(
		'after:border-foreground-light relative flex flex-col text-3xl after:block after:border-t-1',
		className
	)}
	{...rest}
>
	<button
		class="before:bg-foreground-light text-fore flex
				flex-nowrap items-center justify-start gap-4 pb-2
				before:block before:h-2 before:w-2 before:rounded-full"
		onmouseenter={handleHover}
		onmouseleave={handleHover}
	>
		{@render trigger?.()}
	</button>

	{#if open}
		<div transition:fade class="absolute right-0 bottom-1 z-20 max-w-[30rem] text-7xl font-bold">
			{@render children?.()}
		</div>
	{/if}
</div>
