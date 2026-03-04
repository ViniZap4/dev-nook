<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	onMount(() => {
		goto('/dashboard');
	});
</script>

<div class="flex items-center justify-center min-h-screen">
	<div class="box-container m-[2vh_2vw]">
		<div class="flex items-center justify-center flex-col text-[var(--color-text)] text-center m-[1.8vh_2.7vw]">
			<h1 class="mb-[2.7vh]">Welcome to Dev Nook!</h1>
			<h2>Made for Developers!</h2>
		</div>
	</div>
</div>
