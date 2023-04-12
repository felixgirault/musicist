<script lang="ts">
	import {type Note, notePitchClass} from '$lib/notes';
	import {
		playablePitchClasses,
		playedNotes,
		rootPitchClass
	} from '$lib/stores';

	export let note: Note;
	export let isFlipped = false;
	export let isInverted = false;

	$: pitchClass = notePitchClass(note);
</script>

<button
	class:flipped={isFlipped}
	class:inverted={isInverted}
	class:sharp={pitchClass.includes('#')}
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
		--scale-note-size: var(--spacing-0_5);
		--scale-note-direction: to bottom;
		display: inline-flex;
		align-items: flex-end;
		justify-content: right;
		box-shadow: inset 0 0 0 1px var(--surface),
			0 0 0 1px var(--surface);
		background-image: linear-gradient(
			var(--scale-note-direction),
			var(--scale-note-background) 0 var(--scale-note-size),
			transparent var(--scale-note-size) 100%
		);
	}

	button.flipped {
		--scale-note-direction: to left;
		padding-right: 0.75rem;
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
