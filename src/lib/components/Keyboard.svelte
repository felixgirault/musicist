<script lang="ts">
	import {type Note, chromaticRange} from '$lib/notes';
	import Pad from './Pad.svelte';

	export let firstNote: Note = 'C2';
	export let lastNote: Note = 'C6';
</script>

<div class="container">
	<ul class="keyboard">
		{#each chromaticRange(firstNote, lastNote) as note}
			<li>
				<Pad {note} isInverted={note.includes('#')} />
			</li>
		{/each}
	</ul>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		overflow-x: hidden;
	}

	.keyboard {
		display: flex;
		flex-direction: row;
		margin: 0;
		padding: 0;
		height: 12rem;
		list-style: none;
	}

	li :global(button) {
		width: 4ch;
		height: 100%;
	}
</style>
