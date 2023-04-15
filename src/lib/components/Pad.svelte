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
	export let isHighlighted = false;

	$: pitchClass = notePitchClass(note);
</script>

<button
	class:flipped={isFlipped}
	class:inverted={isInverted}
	class:sharp={pitchClass.includes('#')}
	class:root={$rootPitchClass === pitchClass}
	class:scale={$playablePitchClasses.includes(pitchClass)}
	class:highlighted={isHighlighted}
	aria-pressed={$playedNotes.includes(note)}
	data-note={note}
>
	<span>{note}</span>
</button>

<style>
	button {
		--note-name-background: transparent;
		--note-name-color: var(--button-color);
		--scale-note-background: transparent;
		--scale-note-indicator-background: var(--outline);
		--scale-note-size: var(--spacing-0_5);
		--scale-note-direction: to bottom;
		display: inline-flex;
		align-items: flex-end;
		justify-content: right;
		box-shadow: inset 0 0 0 1px var(--surface),
			0 0 0 1px var(--surface);
		background-image: linear-gradient(
				var(--scale-note-direction),
				var(--scale-note-indicator-background) 0
					var(--scale-note-size),
				transparent var(--scale-note-size) 100%
			),
			linear-gradient(
				0deg,
				var(--scale-note-background) 0 100%
			),
			linear-gradient(0deg, var(--button-background) 0 100%);
	}

	button.flipped {
		--scale-note-direction: to left;
		padding-right: 0.75rem;
	}

	button span {
		pointer-events: none;
		outline: var(--spacing-0_25) solid
			var(--note-name-background);
		border-radius: var(--radius);
		background: var(--note-name-background);
		color: var(--note-name-color);
		line-height: 1;
		font-size: var(--font-size-small);
	}

	.root span {
		--note-name-background: var(--primary);
		--note-name-color: var(--button-background);
		font-weight: bolder;
	}

	.root.highlighted span {
		--note-name-background: var(--complementary);
		--note-name-color: var(--button-background);
	}

	.scale {
		--scale-note-background: rgba(var(--primary-rgb), 0.2);
		--scale-note-indicator-background: var(--primary);
	}

	.highlighted {
		--scale-note-background: rgba(
			var(--complementary-rgb),
			0.3
		);
		--scale-note-indicator-background: var(--complementary);
	}
</style>
