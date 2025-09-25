<script lang="ts">
	import { cn } from '$lib/utils';
	import SvelteMarkdown, { type Renderers } from 'svelte-markdown';

	type Props = {
		markdown?: string;
		text?: string;
		richtext?: string;
		class?: string;
		markdownRenderers?: Partial<Renderers>;
	};

	const { markdown, richtext, text, class: className, markdownRenderers }: Props = $props();
</script>

<div class={cn('body text-md flex max-w-lg flex-col gap-1 md:text-lg', className)}>
	{#if text}
		<p>{text}</p>
	{/if}
	{#if markdown}
		<SvelteMarkdown source={markdown} renderers={markdownRenderers} />
	{/if}
	{#if richtext}
		<p>Richtext not supported yet</p>
	{/if}
</div>

<style>
	.body :global(> *) {
		display: flex;
		flex-flow: column;
		gap: 1rem;
	}
	.body :global(h3) {
		font-size: 2rem;
		opacity: 1;
	}
	.body :global(h4) {
		font-size: 1.5rem;
		opacity: 1;
	}
	.body :global(h5) {
		font-size: 1rem;
		opacity: 1;
	}
	.body :global(a) {
		text-decoration: underline;
		display: contents;
	}
	.body :global(strong) {
		opacity: 1;
	}
	.body :global(blockquote) {
		&::before {
			content: open-quote;
			display: inline;
		}
		&::after {
			content: close-quote;
			display: inline;
		}
		quotes: '“' '”' '‘' '’';
		display: block;
	}
	.body :global(blockquote p) {
		display: inline;
	}
</style>
