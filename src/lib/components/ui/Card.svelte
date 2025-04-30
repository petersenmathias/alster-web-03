<script lang="ts">
	import { cn } from '$lib/utils';
	import { CirclePlus } from '@lucide/svelte';
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
	class={cn('text-foreground relative flex  w-full flex-col gap-1 overflow-hidden', className)}
	{...rest}
>
	{#if title}
		<div class="flex shrink-0 flex-nowrap items-center justify-start gap-2">
			{#if title}
				<h2 class="text-sm">{title}</h2>
			{/if}

			{#if label}
				<p class="text-sm opacity-70">[{label}]</p>
			{/if}
		</div>
	{/if}
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
		<div
			class={cn(
				'after:border-background after:transition-border relative h-full w-full overflow-hidden after:absolute after:top-0 after:left-0 after:block after:h-full after:w-full after:duration-200',
				hover ? 'after:border-10' : 'after:border-0'
			)}
		>
			<div
				class={cn(
					'h-full w-full object-cover object-center transition duration-200',
					hover ? 'scale-110 brightness-80' : 'scale-100 brightness-100'
				)}
			>
				{@render children?.()}
			</div>
			<span
				class={cn(
					'text-background ease-none center pointer-events-none absolute top-[50%] left-[50%] z-10 translate-x-[-50%] translate-y-[-50%]  transition duration-200',
					hover ? 'opacity-100' : 'opacity-0'
				)}><CirclePlus size={120} /></span
			>
		</div>
	{/if}
</div>
