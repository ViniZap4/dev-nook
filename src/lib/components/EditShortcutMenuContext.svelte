<script lang="ts">
	import { themeStore } from '$lib/stores/theme.svelte';
	import { shortcutsStore } from '$lib/stores/shortcuts.svelte';
	import { copyTextToClipboard } from '$lib/util/copyTextToClipboard';

	let { onedit }: { onedit: () => void } = $props();

	let menuEl: HTMLDivElement;

	let ctx = $derived(shortcutsStore.contextMenu!);

	function close() {
		shortcutsStore.contextMenu = null;
	}

	function handleCopyAddress() {
		copyTextToClipboard(ctx.link);
		close();
	}

	function handleDelete() {
		if (confirm(`Delete "${ctx.name}" shortcut?`)) {
			shortcutsStore.shortcuts = shortcutsStore.shortcuts.filter(
				(s) => !(s.name === ctx.name && s.link === ctx.link)
			);
			close();
		}
	}

	function openEditShortcut() {
		shortcutsStore.editShortcutInfo = { name: ctx.name, link: ctx.link };
		close();
		onedit();
	}

	$effect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (menuEl && !menuEl.contains(event.target as Node)) {
				close();
			}
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	});
</script>

<div
	bind:this={menuEl}
	class="ctx-menu"
	style="
		top: {ctx.y}px;
		left: {ctx.x}px;
		--ctx-accent: #{themeStore.colors[0]};
	"
>
	<button class="ctx-item" onclick={openEditShortcut}>Edit</button>
	<button class="ctx-item ctx-danger" onclick={handleDelete}>Delete</button>
	<div class="ctx-divider"></div>
	<a class="ctx-item" href={ctx.link} target="_blank" rel="noopener noreferrer" onclick={close}>Open in new tab</a>
	<button class="ctx-item" onclick={handleCopyAddress}>Copy link</button>
</div>

<style>
	.ctx-menu {
		position: fixed;
		z-index: 50;
		display: flex;
		flex-direction: column;
		min-width: 10rem;
		padding: 0.375rem;
		border-radius: 0.75rem;
		background-color: var(--color-background);
		border: 1px solid rgba(255, 255, 255, 0.1);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05) inset;
		backdrop-filter: blur(24px) saturate(1.4);
		animation: scale-in-center 0.15s ease;
	}
	.ctx-item {
		display: block;
		width: 100%;
		padding: 0.5rem 0.75rem;
		border-radius: 0.5rem;
		font-size: 0.8125rem;
		color: var(--color-text);
		text-align: left;
		text-decoration: none;
		transition: background-color 0.1s;
	}
	.ctx-item:hover {
		background-color: rgba(255, 255, 255, 0.08);
	}
	.ctx-danger:hover {
		background-color: rgba(255, 60, 60, 0.15);
		color: #ff6b6b;
	}
	.ctx-divider {
		height: 1px;
		margin: 0.25rem 0.5rem;
		background: rgba(255, 255, 255, 0.08);
	}
</style>
