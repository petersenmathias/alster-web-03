<script lang="ts">
	import Logo from './ui/Logo.svelte';

	type Props = {
		links: {
			label: string;
			href: string;
		}[];
	};

	const { links }: Props = $props();
</script>

<div class="fixed top-0 z-20 p-6 mix-blend-difference">
	<Logo wordMark={false} color="var(--color-background)" />
</div>
<nav
	class="absolute top-0 z-10 flex w-full flex-nowrap items-center justify-end p-6 mix-blend-difference"
>
	<ul
		class="text-background flex w-full max-w-md flex-row justify-between gap-4 text-sm font-medium"
	>
		{#each links as link}
			<li>
				<a href={link.href}>{link.label}</a>
			</li>
		{/each}
	</ul>
</nav>
