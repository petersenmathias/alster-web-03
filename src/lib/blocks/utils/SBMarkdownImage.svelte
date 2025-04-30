<script lang="ts">
	import Media from '$lib/components/Media.svelte';

	export let href = '';
	export let title = undefined;
	export let text = '';
</script>

<Media src={href} alt={text} {title} />
