<script lang="ts">
	import Body from '$lib/components/ui/Body.svelte';
	import { storyblokEditable } from '@storyblok/svelte';
	import type { StoyblokBlok } from '../../types/generics';
	import type { TextStoryblok } from '../../types/storyblok';

	const { blok }: StoyblokBlok<TextStoryblok> = $props();
</script>

<div use:storyblokEditable={blok}>
	<Body markdown={blok.body ?? ''} />
</div>
