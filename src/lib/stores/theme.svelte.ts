import { browser } from '$app/environment';
import type { color } from '$lib/styles/colors';
import { bluePalette } from '$lib/styles/colors';
import dark from '$lib/styles/themes/dark';
import { createPersistedState } from './persisted.svelte';

type Theme = typeof dark;

const themeState = createPersistedState<Theme>('theme', dark);
const colorsState = createPersistedState<color>('palette', bluePalette);

if (browser) {
	$effect.root(() => {
		$effect(() => {
			const theme = themeState.value;
			const colors = colorsState.value;
			const root = document.documentElement;

			root.style.setProperty('--color-background', theme.colors.background);
			root.style.setProperty('--color-text', theme.colors.text);

			for (let i = 0; i < colors.length; i++) {
				root.style.setProperty(`--palette-${i}`, colors[i]);
			}
		});
	});
}

export const themeStore = {
	get theme() {
		return themeState.value;
	},
	set theme(v: Theme) {
		themeState.value = v;
	},

	get colors() {
		return colorsState.value;
	},
	set colors(v: color) {
		colorsState.value = v;
	}
};
