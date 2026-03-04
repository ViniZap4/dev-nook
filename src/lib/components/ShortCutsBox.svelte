<script lang="ts">
	import { shortcutsStore } from '$lib/stores/shortcuts.svelte';
	import ShortCut from './ShortCut.svelte';
	import NewShortCut from './NewShortCut.svelte';
	import EditShortcutMenuContext from './EditShortcutMenuContext.svelte';
	import CreateShortcutModal from './CreateShortcutModal.svelte';
	import EditShortcutModal from './EditShortcutModal.svelte';

	let createModalOpen = $state(false);
	let editModalOpen = $state(false);
</script>

<section class="card p-6 animate-fade-in">
	<h2 class="text-[var(--color-text)] mb-4">Shortcuts</h2>
	<div class="grid grid-cols-[repeat(auto-fill,5.5rem)] gap-1">
		{#each shortcutsStore.shortcuts as shortcut (shortcut.name + shortcut.link)}
			<ShortCut link={shortcut.link} name={shortcut.name} />
		{/each}
		<NewShortCut oncreate={() => { createModalOpen = true; }} />
	</div>
	{#if shortcutsStore.contextMenu}
		<EditShortcutMenuContext onedit={() => { editModalOpen = true; }} />
	{/if}
</section>

<CreateShortcutModal open={createModalOpen} onclose={() => { createModalOpen = false; }} />
<EditShortcutModal open={editModalOpen} onclose={() => { editModalOpen = false; }} />
