<script lang="ts">
	import { themeStore } from '$lib/stores/theme.svelte';
	import { shortcutsStore } from '$lib/stores/shortcuts.svelte';

	let { name, link }: { name: string; link: string } = $props();

	const url = new URL(link);
	const urlIcon = `https://${url.hostname}/favicon.ico`;

	function handleContextMenu(e: MouseEvent) {
		e.preventDefault();
		shortcutsStore.contextMenu = { x: e.x, y: e.y, name, link };
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<a
	class="shortcut-card"
	href={url.href}
	target="_blank"
	rel="noopener noreferrer"
	oncontextmenu={handleContextMenu}
	style="--accent: #{themeStore.colors[0]};"
>
	<!-- svelte-ignore a11y_missing_attribute -->
	<object class="shortcut-icon" data={urlIcon} type="image/png" aria-label="{name} icon">
		<span class="shortcut-fallback" style="background: linear-gradient(135deg, #{themeStore.colors[0]}40, #{themeStore.colors[3]}40); color: #{themeStore.colors[0]};">
			{name[0].toUpperCase()}{name.length > 1 ? name[1].toLowerCase() : ''}
		</span>
	</object>
	<span class="shortcut-name">{name}</span>
</a>

<style>
	.shortcut-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		padding: 0.75rem;
		border-radius: 1rem;
		text-decoration: none;
		transition: transform 0.2s, background-color 0.2s;
		width: 5.5rem;
	}
	.shortcut-card:hover {
		transform: translateY(-2px);
		background-color: rgba(255, 255, 255, 0.06);
	}
	.shortcut-icon {
		width: 2.75rem;
		height: 2.75rem;
		border-radius: 0.75rem;
		background: rgba(255, 255, 255, 0.08);
		padding: 0.375rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.shortcut-fallback {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		border-radius: 0.5rem;
		font-weight: 700;
		font-size: 0.875rem;
	}
	.shortcut-name {
		font-size: 0.75rem;
		color: var(--color-text);
		opacity: 0.6;
		text-align: center;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		max-width: 100%;
	}
</style>
