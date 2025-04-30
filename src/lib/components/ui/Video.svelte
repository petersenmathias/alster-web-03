<script lang="ts">
	import { cn } from '$lib/utils';
	import type { SvelteHTMLElements } from 'svelte/elements';

	type Props = {
		src: string;
	} & SvelteHTMLElements['video'];
	const { src, class: className }: Props = $props();
</script>

<video class={cn('h-full w-full object-cover', className)} loop autoplay muted playsinline>
	<source {src} type="video/mp4" />
</video>
