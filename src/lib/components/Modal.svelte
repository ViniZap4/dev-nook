<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fade, scale } from 'svelte/transition';

	let {
		open = false,
		title = '',
		onclose,
		children
	}: {
		open: boolean;
		title?: string;
		onclose: () => void;
		children: Snippet;
	} = $props();

	let overlayEl: HTMLDivElement;

	function handleOverlayClick(e: MouseEvent) {
		if (e.target === overlayEl) onclose();
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') onclose();
	}
</script>

<svelte:window onkeydown={handleKeydown} />

{#if open}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div
		bind:this={overlayEl}
		class="fixed inset-0 z-50 flex items-center justify-center"
		onclick={handleOverlayClick}
		transition:fade={{ duration: 150 }}
		style="background: rgba(0, 0, 0, 0.6); backdrop-filter: blur(4px);"
	>
		<div
			class="modal-card"
			transition:scale={{ duration: 200, start: 0.95 }}
		>
			<div class="flex items-center justify-between mb-5">
				<h2 class="text-[var(--color-text)]">{title}</h2>
				<button
					class="close-btn"
					onclick={onclose}
				>
					<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
						<path d="M1 1L13 13M13 1L1 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
					</svg>
				</button>
			</div>
			{@render children()}
		</div>
	</div>
{/if}

<style>
	.modal-card {
		width: 100%;
		max-width: 26rem;
		margin: 1rem;
		padding: 1.5rem;
		border-radius: 1.25rem;
		background-color: var(--color-background);
		border: 1px solid rgba(255, 255, 255, 0.08);
		box-shadow: 0 24px 64px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.04) inset;
		backdrop-filter: blur(32px) saturate(1.4);
	}
	.close-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2rem;
		height: 2rem;
		border-radius: 0.5rem;
		color: var(--color-text);
		opacity: 0.4;
		transition: opacity 0.15s, background-color 0.15s;
	}
	.close-btn:hover {
		opacity: 1;
		background-color: rgba(255, 255, 255, 0.08);
	}
</style>
