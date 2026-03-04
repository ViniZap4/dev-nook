<script lang="ts">
	import PlusIcon from '$lib/assets/icons/PlusIcon.svelte';
	import { themeStore } from '$lib/stores/theme.svelte';

	let { oncreate }: { oncreate: () => void } = $props();
</script>

<button class="new-shortcut-card" onclick={oncreate} style="--accent: #{themeStore.colors[0]};">
	<div class="new-shortcut-icon">
		<PlusIcon colors={themeStore.colors} />
	</div>
	<span class="new-shortcut-label">Add new</span>
</button>

<style>
	.new-shortcut-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		padding: 0.75rem;
		border-radius: 1rem;
		transition: transform 0.2s, background-color 0.2s;
		width: 5.5rem;
	}
	.new-shortcut-card:hover {
		transform: translateY(-2px);
		background-color: rgba(255, 255, 255, 0.06);
	}
	.new-shortcut-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.75rem;
		height: 2.75rem;
		border-radius: 0.75rem;
		border: 2px dashed rgba(255, 255, 255, 0.15);
		transition: border-color 0.2s;
	}
	.new-shortcut-card:hover .new-shortcut-icon {
		border-color: var(--accent);
	}
	.new-shortcut-icon :global(svg) {
		width: 45%;
		height: 45%;
		opacity: 0.5;
	}
	.new-shortcut-card:hover .new-shortcut-icon :global(svg) {
		opacity: 0.8;
	}
	.new-shortcut-label {
		font-size: 0.75rem;
		color: var(--color-text);
		opacity: 0.4;
	}
</style>
