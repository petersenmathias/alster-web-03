<script lang="ts">
	import Meta from '$lib/components/Meta.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import type { Snippet } from 'svelte';

	import Footer from '$lib/blocks/Footer.svelte';
	import '../app.css';

	import { onNavigate } from '$app/navigation';
	import type { StoryblokPageData } from '../types/generics';
	import type { ConfigStoryblok } from '../types/storyblok';

	type Props = {
		data: StoryblokPageData<ConfigStoryblok>;
		children: Snippet;
	};

	let { children, data }: Props = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<Meta />
<main class="flex min-h-screen flex-col">
	<div class="flex flex-1 flex-col gap-24">
		<Navigation
			links={data.story.content.navigation.map((item) => ({
				label: item.title,
				href: item.Link.cached_url
			}))}
		/>
		{@render children()}
	</div>
	<Footer columns={data.story.content.footer ?? []} />
</main>
