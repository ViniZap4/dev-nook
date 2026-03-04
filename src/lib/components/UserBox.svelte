<script lang="ts">
	import { themeStore } from '$lib/stores/theme.svelte';
</script>

<section class="card p-6 animate-fade-in">
	<div class="flex items-center gap-4">
		<div
			class="flex justify-center items-center w-14 h-14 rounded-2xl text-white text-xl font-bold shrink-0"
			style="background: linear-gradient(135deg, #{themeStore.colors[0]}, #{themeStore.colors[3]});"
		>
			DN
		</div>
		<div>
			<h1 class="text-[var(--color-text)] leading-tight">Welcome back</h1>
			<p class="text-[var(--color-text)] opacity-50 mt-0.5">Your personal developer dashboard</p>
		</div>
	</div>
</section>
