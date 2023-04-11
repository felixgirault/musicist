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
		height: 100%;
		overflow-x: hidden;
	}

	.keyboard {
		--white-key-size: 5ch;
		--black-key-size: calc(2 / 3 * var(--white-key-size));
		--black-key-half-size: calc(var(--black-key-size) / 2);
		--black-key-offset: 0ch;
		--black-key-centered-offset: calc(
			var(--white-key-size) - var(--black-key-half-size)
		);
		--black-key-small-offset: calc(
			var(--black-key-centered-offset) -
				(
					3 * var(--white-key-size) - 2 *
						var(--black-key-size)
				) / 3
		);
		--black-key-large-offset: calc(
			var(--black-key-centered-offset) -
				(
					4 * var(--white-key-size) - 3 *
						var(--black-key-size)
				) / 4
		);
		display: flex;
		flex-direction: row;
		margin: 0;
		padding: 0;
		height: 100%;
		list-style: none;
	}

	li {
		position: relative;
	}

	li :global(button) {
		width: var(--white-key-size);
		height: 100%;
	}

	li :global(.sharp) {
		position: absolute;
		top: 0;
		left: calc(
			-1 * var(--black-key-half-size) + var(--black-key-offset)
		);
		width: var(--black-key-size);
		height: 60%;
		z-index: 10;
	}

	li :global(.sharp[data-note^='C#']) {
		--black-key-offset: calc(
			-1 * var(--black-key-small-offset)
		);
	}

	li :global(.sharp[data-note^='D#']) {
		--black-key-offset: var(--black-key-small-offset);
	}

	li :global(.sharp[data-note^='F#']) {
		--black-key-offset: calc(
			-1 * var(--black-key-large-offset)
		);
	}

	li :global(.sharp[data-note^='A#']) {
		--black-key-offset: var(--black-key-large-offset);
	}
</style>
