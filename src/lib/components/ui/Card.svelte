<script lang="ts">
	import { cn } from '$lib/utils';
	import type { SvelteHTMLElements } from 'svelte/elements';

	export type Props = {
		href?: string;
		title?: string;
		label?: string;
	} & SvelteHTMLElements['div'];

	let { children, href, title, label, class: className, ...rest }: Props = $props();
	let hover = $state(false);
</script>

<div
	class={cn('text-foreground relative flex  w-full flex-col gap-4 overflow-hidden', className)}
	{...rest}
>
	{#if href !== undefined}
		<a
			onmouseenter={() => (hover = true)}
			onmouseleave={() => (hover = false)}
			class="absolute z-10 h-full w-full"
			aria-label={`Link to project: ${title ?? label}`}
			{href}
		>
		</a>
	{/if}

	{#if children}
		<div class={cn('h-full w-full object-cover object-center')}>
			{@render children?.()}
		</div>
	{/if}

	{#if title}
		<div class="text-md flex shrink-0 flex-col justify-start md:text-lg">
			{#if title}
				<h2 class="leading-tight">{title}</h2>
			{/if}

			{#if label}
				<p class="leading-tight">{label}</p>
			{/if}
		</div>
	{/if}
</div>
