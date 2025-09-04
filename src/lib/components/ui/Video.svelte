<script lang="ts">
	import { cn, formatSeconds } from '$lib/utils';
	import { Pause, Play } from '@lucide/svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';

	type Props = {
		src: string;
		controls?: boolean;
	} & SvelteHTMLElements['video'];
	const {
		src,
		class: className,
		autoplay = false,
		muted = true,
		playsinline = true,
		...rest
	}: Props = $props();

	let duration = $state(-1);
	let time = $state(0);
	let paused = $state(!autoplay);
	let showControls = $state(true);
	let showControlsTimeout: NodeJS.Timeout;
	let video: HTMLVideoElement;

	function handleMove(event: MouseEvent | TouchEvent) {
		event.preventDefault();

		clearTimeout(showControlsTimeout);
		showControlsTimeout = setTimeout(() => (showControls = false), 2500);
		showControls = true;

		if (duration === -1) return;
		if (event.type !== 'touchmove' && !((event as MouseEvent).buttons & 1)) return;

		paused = true;

		const clientX =
			event.type === 'touchmove'
				? (event as unknown as TouchEvent).touches[0].clientX
				: (event as MouseEvent).clientX;

		const { left, right } = video.getBoundingClientRect();
		time = (duration * (clientX - left)) / (right - left);
	}

	function handleMouseup() {
		paused = !paused;
	}
</script>

<div class="relative">
	<video
		bind:this={video}
		bind:currentTime={time}
		bind:duration
		bind:paused
		onmousemove={handleMove}
		ontouchmove={handleMove}
		onmouseup={handleMouseup}
		class={cn('h-full w-full object-cover', className)}
		{autoplay}
		{muted}
		{playsinline}
		{...rest}
	>
		<source {src} type="video/mp4" />
	</video>

	<div
		class="pointer-events-none absolute bottom-0 w-full p-6 transition-opacity duration-1000"
		style="opacity: {duration && showControls ? 1 : 0}"
	>
		<div class="color-foreground flex w-full justify-between">
			<span class="text-background w-30 py-2">{formatSeconds(time)}</span>
			<span class="text-background w-30 py-2 text-right">{formatSeconds(duration)}</span>
		</div>
		<progress
			class="webkit-progress-bar-[rgba(0, 0, 0, 0.2)] block h-1 w-full appearance-none"
			value={time / duration || 0}
		></progress>
	</div>

	<div
		class="pointer-events-none absolute top-0 z-10 flex h-full w-full items-center justify-center"
	>
		{#if paused}
			<Play size={100} color="#FFF" />
		{:else}
			<Pause size={100} color="#FFF" />
		{/if}
	</div>
</div>

<style>
	progress::-webkit-progress-bar {
		background-color: rgba(0, 0, 0, 0.2);
	}

	progress::-webkit-progress-value {
		background-color: rgba(255, 255, 255, 0.6);
	}
</style>
