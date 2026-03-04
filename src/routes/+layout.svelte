<script lang="ts">
	import '../app.css';
	import '$lib/stores/theme.svelte';

	let { children } = $props();
</script>

<div class="min-h-screen bg-[var(--color-background)]">
	{@render children()}
</div>
