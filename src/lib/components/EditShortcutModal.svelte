<script lang="ts">
	import { shortcutsStore } from '$lib/stores/shortcuts.svelte';
	import Modal from './Modal.svelte';

	let { open = false, onclose }: { open: boolean; onclose: () => void } = $props();

	function handleEditShortcut(event: SubmitEvent) {
		event.preventDefault();
		const formData = new FormData(event.target as HTMLFormElement);
		const data = Object.fromEntries(formData);

		const idx = shortcutsStore.shortcuts.findIndex(
			(s) => s.name === shortcutsStore.editShortcutInfo.name
		);

		if (idx !== -1) {
			const updated = [...shortcutsStore.shortcuts];
			updated[idx] = {
				name: data.name.toString(),
				link: data.url.toString()
			};
			shortcutsStore.shortcuts = updated;
			shortcutsStore.editShortcutInfo = updated[idx];
		}

		onclose();
	}
</script>

<Modal {open} title="Edit Shortcut" {onclose}>
	<form class="flex flex-col gap-4" onsubmit={handleEditShortcut}>
		<label class="field">
			<span class="field-label">Name</span>
			<input class="field-input" type="text" value={shortcutsStore.editShortcutInfo.name} name="name" required />
		</label>

		<label class="field">
			<span class="field-label">URL</span>
			<input class="field-input" type="url" name="url" value={shortcutsStore.editShortcutInfo.link} pattern="https://.*" required />
		</label>

		<button class="submit-btn" type="submit">Save changes</button>
	</form>
</Modal>

<style>
	.field {
		display: flex;
		flex-direction: column;
		gap: 0.375rem;
	}
	.field-label {
		font-size: 0.8125rem;
		font-weight: 500;
		color: var(--color-text);
		opacity: 0.6;
	}
	.field-input {
		padding: 0.625rem 0.75rem;
		background: rgba(255, 255, 255, 0.06);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 0.625rem;
		color: var(--color-text);
		font-size: 0.9375rem;
		transition: border-color 0.2s, background-color 0.2s;
	}
	.field-input::placeholder {
		color: var(--color-text);
		opacity: 0.25;
	}
	.field-input:focus {
		border-color: rgba(255, 255, 255, 0.25);
		background: rgba(255, 255, 255, 0.08);
	}
	.submit-btn {
		margin-top: 0.25rem;
		padding: 0.625rem;
		border-radius: 0.625rem;
		font-weight: 600;
		font-size: 0.875rem;
		color: #fff;
		background-color: var(--palette-0);
		transition: opacity 0.15s, transform 0.15s;
	}
	.submit-btn:hover {
		opacity: 0.85;
		transform: translateY(-1px);
	}
</style>
