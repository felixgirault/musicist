<script lang="ts">
	import {browser} from '$app/environment';
	import {onDestroy, onMount} from 'svelte';
	import {start} from 'tone';

	// Waiting for the first user interaction to start the
	// audio context.
	// @see https://github.com/Tonejs/Tone.js#starting-audio
	const handleClick = async (event: MouseEvent) => {
		if (
			(
				event.target as HTMLButtonElement
			)?.tagName.toLowerCase() === 'button'
		) {
			await start();
			document.body.removeEventListener('click', handleClick);
		}
	};

	onMount(() => {
		document.body.addEventListener('click', handleClick);
	});

	onDestroy(() => {
		browser &&
			document.body.removeEventListener('click', handleClick);
	});
</script>
