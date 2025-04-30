<script lang="ts">
	import { cn } from '$lib/utils';
	import { CircleMinus, CirclePlus } from '@lucide/svelte';
	import type { Snippet } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { slide } from 'svelte/transition';

	type Props = {
		trigger: Snippet;
		children: Snippet;
		open?: boolean;
		contentClass?: string;
	} & SvelteHTMLElements['div'];

	let {
		open = $bindable(false),
		trigger,
		children,
		class: className,
		contentClass,
		...rest
	}: Props = $props();

	const handleClick = () => (open = !open);
</script>

<div
	class={cn('after:border-foreground-light flex flex-col after:block after:border-t-1', className)}
	{...rest}
>
	<button
		class="flex cursor-pointer flex-nowrap items-center justify-between gap-2 pb-4 text-4xl"
		onclick={handleClick}
	>
		{@render trigger?.()}

		{#if open}
			<CircleMinus />
		{:else}
			<CirclePlus />
		{/if}
	</button>

	{#if open}
		<div transition:slide class={cn('flex flex-col gap-4 pb-4', contentClass)}>
			{@render children?.()}
		</div>
	{/if}
</div>
