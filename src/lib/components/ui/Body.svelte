<script lang="ts">
	import { cn } from '$lib/utils';
	import { cva, type VariantProps } from 'class-variance-authority';
	import SvelteMarkdown, { type Renderers } from 'svelte-markdown';

	const textVariants = cva('', {
		variants: {
			size: {
				xs: 'text-xs max-w-lg [&_p]:opacity-80',
				sm: 'text-sm max-w-lg [&_p]:opacity-80',
				md: 'text-base max-w-2xl [&_p]:opacity-80',
				lg: 'text-lg max-w-2xl [&_p]:opacity-80',
				xl: 'text-xl max-w-2xl leading-8 [&_p]:opacity-80',
				'2xl': 'text-2xl max-w-3xl leading-9',
				'3xl': 'text-3xl max-w-3xl leading-10',
				'4xl': 'text-4xl max-w-3xl leading-11',
				'5xl': 'text-5xl max-w-3xl leading-11',
				'6xl': 'text-6xl max-w-3xl leading-11',
				'7xl': 'text-7xl max-w-3xl leading-11'
			}
		},
		defaultVariants: {
			size: 'md'
		}
	});

	type Props = {
		markdown?: string;
		text?: string;
		richtext?: string;
		class?: string;
		markdownRenderers?: Partial<Renderers>;
	} & VariantProps<typeof textVariants>;

	const { markdown, richtext, text, class: className, size, markdownRenderers }: Props = $props();
</script>

<div class={cn('body flex flex-col gap-1', textVariants({ size }), className)}>
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
