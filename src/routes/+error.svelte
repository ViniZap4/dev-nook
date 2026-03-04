<script>
	import { page } from '$app/stores';
</script>

<div class="flex flex-col items-center justify-center min-h-screen gap-2">
	<h1 class="text-[var(--color-text)] opacity-20" style="font-size: 5rem;">{$page.status}</h1>
	<p class="text-[var(--color-text)] opacity-50">{$page.error?.message ?? 'Page not found'}</p>
	<a href="/dashboard" class="mt-4 px-4 py-2 text-sm text-[var(--color-text)] opacity-60 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
		Go to dashboard
	</a>
</div>
