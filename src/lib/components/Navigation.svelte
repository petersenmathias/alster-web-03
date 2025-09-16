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


<div class="fixed top-0 left-0 z-50 p-6 w-full flex items-center justify-between mix-blend-difference">
	<Logo wordMark={false} color="var(--color-foreground)" />
	<nav class="flex flex-nowrap items-center justify-end w-full">
		<ul class="text-foreground flex max-w-md flex-row justify-between gap-4 text-sm font-medium w-full">
			{#each links as link}
				<li>
					<a href={link.href}>{link.label}</a>
				</li>
			{/each}
		</ul>
	</nav>
</div>
