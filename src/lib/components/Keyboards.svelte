<script lang="ts">
	import {reverse} from '$lib/arrays';
	import {keyboardCount, keyboardRanges} from '$lib/stores';
	import Keyboard from './Keyboard.svelte';

	// It feels more natural to have higher ranges on top.
	$: reversedRanges = reverse($keyboardRanges);
</script>

<div class="container" style:--keyboard-count={$keyboardCount}>
	{#each reversedRanges as [firstNote, lastNote]}
		<Keyboard {firstNote} {lastNote} />
	{/each}
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
		overflow-x: hidden;
	}

	.container > :global(*) {
		height: calc(100% / var(--keyboard-count));
	}
</style>
