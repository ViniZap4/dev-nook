export async function copyTextToClipboard(text: string) {
	try {
		await navigator.clipboard.writeText(text);
	} catch (err) {
		console.error('Unable to copy to clipboard', err);
	}
}
