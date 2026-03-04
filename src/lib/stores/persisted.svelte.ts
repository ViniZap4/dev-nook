import { browser } from '$app/environment';

export function createPersistedState<T>(key: string, initial: T) {
	let stored: string | null = null;
	if (browser) {
		try {
			stored = localStorage.getItem(key);
		} catch {
			// localStorage may be unavailable
		}
	}

	let parsed: T = initial;
	if (stored) {
		try {
			parsed = JSON.parse(stored);
		} catch {
			// corrupted data, fall back to initial
		}
	}

	let value = $state<T>(parsed);
	let saveTimer: ReturnType<typeof setTimeout> | undefined;

	if (browser) {
		$effect.root(() => {
			$effect(() => {
				// Read the value to subscribe to changes
				const v = value;
				// Debounce localStorage writes (100ms)
				clearTimeout(saveTimer);
				saveTimer = setTimeout(() => {
					try {
						localStorage.setItem(key, JSON.stringify(v));
					} catch {
						// quota exceeded or unavailable
					}
				}, 100);
			});
		});
	}

	return {
		get value() {
			return value;
		},
		set value(v: T) {
			value = v;
		}
	};
}
