<script lang="ts">
	import { page } from '$app/state';
	import Logo from './ui/Logo.svelte';

	const { links } = $props<{
		links: {
			label: string;
			href: string;
		}[];
	}>();
</script>

<div
	class="fixed top-0 left-0 z-50 flex w-full items-center justify-between p-6 mix-blend-difference"
>
	<Logo color="var(--color-foreground)" />
	<nav class="flex w-full flex-nowrap items-center justify-end">
		<ul
			class="text-foreground text-md flex w-full max-w-md flex-row justify-between gap-4 font-medium"
		>
			{#each links as link}
				<li>
					{#if link.label === 'Contact'}
						<a
							href={link.href}
							class="flex items-center gap-2 border border-current px-3 py-1 {page.url.pathname ===
							link.href
								? 'border-b-1 border-b-current'
								: ''}"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="12"
								height="11"
								viewBox="0 0 12 11"
								fill="none"
							>
								<path d="M12 5.34798L-4.24625e-07 10.2051L0 0.490844L12 5.34798Z" fill="white" />
							</svg>
							{link.label}
						</a>
					{:else}
						<a href={link.href} class="relative mx-3 my-1 flex">
							{link.label}
							{#if page.url.pathname === link.href}
								<span
									class="bg-foreground-light pointer-events-none absolute -bottom-1.5 left-0 h-px w-full"
								></span>
							{/if}
						</a>
					{/if}
				</li>
			{/each}
		</ul>
	</nav>
</div>
