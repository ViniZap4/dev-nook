<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import UserBox from '$lib/components/UserBox.svelte';
	import ShortCutsBox from '$lib/components/ShortCutsBox.svelte';
	import AppearanceSection from '$lib/components/AppearanceSection.svelte';
</script>

<Navbar />
<main class="max-w-3xl mx-auto px-5 py-8 flex flex-col gap-5">
	<UserBox />
	<ShortCutsBox />
	<AppearanceSection />
</main>
