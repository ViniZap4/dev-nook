<script lang="ts">
	import SwitchButtonIcon from '$lib/assets/icons/SwitchButtonIcon.svelte';
	import { themeStore } from '$lib/stores/theme.svelte';
	import dark from '$lib/styles/themes/dark';
	import light from '$lib/styles/themes/light';

	let active = $derived(themeStore.theme.title === 'light');

	function toggle() {
		themeStore.theme = active ? dark : light;
	}
</script>

<button class="w-[4.5rem] h-12 cursor-pointer border-none bg-none" type="button" onclick={toggle}>
	<SwitchButtonIcon color={`#${themeStore.colors[0]}`} colorBackground={themeStore.theme.colors.background} {active} />
</button>

<style>
	button :global(svg) {
		width: 4.5rem;
		height: 3rem;
		transition: transform 0.2s, filter 0.2s;
	}
	button:hover :global(svg),
	button:focus :global(svg) {
		transform: scale(1.1);
		filter: drop-shadow(0px 0px 1.2vh #00000056);
	}
</style>
