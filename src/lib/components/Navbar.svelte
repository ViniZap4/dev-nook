<script lang="ts">
	import { themeStore } from '$lib/stores/theme.svelte';
	import SwitchButtonTheme from './SwitchButtonTheme.svelte';
	import ColorIcon from '$lib/assets/icons/ColorIcon.svelte';
	import { cianoPalette, pinkPalette, orangePalette, bluePalette } from '$lib/styles/colors';

	const palettes = [cianoPalette, pinkPalette, orangePalette, bluePalette];
</script>

<nav class="sticky top-0 z-40 flex items-center justify-between px-8 py-4 border-b border-white/[0.06]" style="background-color: {themeStore.theme.colors.background}e6; backdrop-filter: blur(20px) saturate(1.3);">
	<div class="flex items-center gap-2">
		<div class="w-2.5 h-2.5 rounded-full" style="background-color: #{themeStore.colors[0]};"></div>
		<span class="text-[var(--color-text)] font-semibold tracking-tight">Dev Nook</span>
	</div>

	<div class="flex items-center gap-4">
		<div class="flex items-center gap-1.5">
			{#each palettes as palette}
				<button
					class="palette-btn"
					class:active={palette[0] === themeStore.colors[0]}
					onclick={() => { themeStore.colors = palette; }}
					style="--dot-color: #{palette[0]};"
				>
					<div class="w-4 h-4 rounded-full transition-all duration-200" style="background-color: #{palette[0]};"></div>
				</button>
			{/each}
		</div>

		<div class="w-px h-5 bg-white/10"></div>

		<SwitchButtonTheme />
	</div>
</nav>

<style>
	.palette-btn {
		padding: 3px;
		border-radius: 50%;
		transition: transform 0.2s, box-shadow 0.2s;
	}
	.palette-btn:hover {
		transform: scale(1.15);
	}
	.palette-btn.active {
		transform: scale(1.2);
		box-shadow: 0 0 10px var(--dot-color), 0 0 3px var(--dot-color);
	}
</style>
