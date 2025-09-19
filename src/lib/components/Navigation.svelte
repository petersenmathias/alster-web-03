<script lang="ts">
	import { page } from '$app/state';
	import { writable } from 'svelte/store';
	import Logo from './ui/Logo.svelte';

	const { links } = $props<{
		links: {
			label: string;
			href: string;
		}[];
	}>();

	const menuOpen = writable(false);

	function openMenu() {
		menuOpen.set(true);
	}
	function closeMenu() {
		menuOpen.set(false);
	}
</script>

<div class="nav-root">
	<div class="hidden md:block">
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
									class="flex items-center gap-2 border border-current px-3 py-1 {page.url
										.pathname === link.href
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
										<path
											d="M12 5.34798L-4.24625e-07 10.2051L0 0.490844L12 5.34798Z"
											fill="white"
										/>
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
	</div>
	<div
		class="fixed top-0 left-0 z-50 flex h-14 w-full items-center justify-between px-6 mix-blend-difference md:hidden"
	>
		<Logo color="#fff" />
		{#if !$menuOpen}
			<button
				type="button"
				aria-label="Open menu"
				onclick={openMenu}
				class="flex cursor-pointer items-center gap-2 text-lg text-white"
			>
				<span class="text-base font-normal tracking-tight">Menu</span>
				<span class="ml-1 text-2xl leading-none font-normal">=</span>
			</button>
		{:else}
			<button
				type="button"
				aria-label="Close menu"
				onclick={closeMenu}
				class="flex cursor-pointer items-center gap-2 text-lg text-white"
			>
				<span class="text-base font-normal tracking-tight">Close</span>
				<span class="ml-1 text-2xl leading-none font-normal">×</span>
			</button>
		{/if}
	</div>
	{#if $menuOpen}
		<div
			class="fixed inset-0 z-40 flex min-h-screen w-screen flex-col justify-between bg-black text-white"
		>
			<div class="flex flex-1 flex-col items-start justify-center gap-2 pl-6">
				{#each links as link}
					<a href={link.href} class="relative my-1 text-left text-4xl" onclick={closeMenu}>
						{link.label}
						{#if page.url.pathname === link.href}
							<span
								class="bg-foreground-light pointer-events-none absolute -bottom-1.5 left-0 h-px w-full"
							></span>
						{/if}
					</a>
				{/each}
			</div>
			<div class="px-6 pb-6 text-lg text-white opacity-90">
				<span>Shaping ideas into experiences<br />that truly matter.</span>
			</div>
		</div>
	{/if}
</div>
