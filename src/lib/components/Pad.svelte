<script lang="ts">
	import {type Note, notePitchClass} from '$lib/notes';
	import {
		playablePitchClasses,
		playedNotes,
		rootPitchClass
	} from '$lib/stores';

	export let note: Note;
	export let isInverted = false;

	$: pitchClass = notePitchClass(note);
</script>

<button
	class:inverted={isInverted}
	class:root={$rootPitchClass === pitchClass}
	class:scale={$playablePitchClasses.includes(pitchClass)}
	aria-pressed={$playedNotes.includes(note)}
	data-note={note}
>
	<span>{note}</span>
</button>

<style>
	button {
		--scale-note-background: var(--outline);
		display: inline-flex;
		align-items: flex-end;
		justify-content: right;
		box-shadow: inset 0 0 0 1px var(--surface),
			0 0 0 1px var(--surface);
		background-image: linear-gradient(
			to bottom,
			var(--scale-note-background) 0 var(--spacing-0_5),
			transparent var(--spacing-0_5) 100%
		);
	}

	button span {
		pointer-events: none;
		font-size: var(--font-size-small);
	}

	.root {
		font-weight: bolder;
	}

	.scale {
		--scale-note-background: var(
			--interactive-surface--active
		);
	}
</style>
