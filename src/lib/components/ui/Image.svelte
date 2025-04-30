<script lang="ts">
	import { cn } from '$lib/utils';
	import type { SvelteHTMLElements } from 'svelte/elements';

	type Props = {
		src: string;
	} & SvelteHTMLElements['img'];

	const { class: className, ...rest }: Props = $props();
</script>

<img class={cn(className)} {...rest} />
