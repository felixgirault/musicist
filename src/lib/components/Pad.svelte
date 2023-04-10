<script lang="ts">
	import {type Note, notePitchClass} from '$lib/notes';
	import {playablePitchClasses, playedNotes} from '$lib/stores';

	export let note: Note;
	export let isInverted = false;

	const {notes} = playedNotes;
</script>

<button
	class:inverted={isInverted}
	class:scale={$playablePitchClasses.includes(
		notePitchClass(note)
	)}
	class:pressed={$notes.includes(note)}
	data-note={note}
>
	{note}
</button>

<style>
	button {
		opacity: 0.5;
	}

	.inverted {
		filter: invert(1);
	}

	.scale {
		opacity: 1;
	}

	.pressed {
		background: red;
	}
</style>
