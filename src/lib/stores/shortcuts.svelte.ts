import type { ShortCutProps } from '$lib/types/shortcuts';
import { createPersistedState } from './persisted.svelte';

const shortcutsState = createPersistedState<ShortCutProps[]>('shortcuts', [
	{ link: 'https://www.awwwards.com/', name: 'awwwards' },
	{ link: 'https://www.deviceinfo.me/', name: 'deviceinfo' }
]);

interface ContextMenuData {
	x: number;
	y: number;
	name: string;
	link: string;
}

let editShortcutInfo = $state<ShortCutProps>({ link: '', name: '' });
let contextMenu = $state<ContextMenuData | null>(null);

export const shortcutsStore = {
	get shortcuts() {
		return shortcutsState.value;
	},
	set shortcuts(v: ShortCutProps[]) {
		shortcutsState.value = v;
	},

	get editShortcutInfo() {
		return editShortcutInfo;
	},
	set editShortcutInfo(v: ShortCutProps) {
		editShortcutInfo = v;
	},

	get contextMenu() {
		return contextMenu;
	},
	set contextMenu(v: ContextMenuData | null) {
		contextMenu = v;
	}
};
