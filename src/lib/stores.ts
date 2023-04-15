import {derived, readonly, writable} from 'svelte/store';
import {withValue, withoutValue} from './arrays';
import {type Fretboard, fingering} from './fretboard';
import type {Instrument} from './instruments';
import {
	type Note,
	type NoteRange,
	type PitchClass,
	PitchClasses
} from './notes';
import {type Scale, scalePitchClasses} from './scales';
import {Tunings} from './tunings';

const playableNotesStore = () => {
	const notes = writable<Note[]>([]);

	const start = (note: Note) => {
		notes.update(($notes) => withValue($notes, note));
	};

	const stop = (note: Note) => {
		notes.update(($notes) => withoutValue($notes, note));
	};

	return {
		...readonly(notes),
		start,
		stop
	};
};

export const playedNotes = playableNotesStore();
export const rootPitchClass = writable<PitchClass>(
	PitchClasses[0]
);

export const scale = writable<Scale | undefined>();
export const playablePitchClasses = derived(
	[scale, rootPitchClass],
	([$scale, $root]) =>
		$scale ? scalePitchClasses($scale, $root) : []
);

export const areOutOfScaleNotesMuted = writable(false);

export const keyboardCount = writable(1);

// Instead of dynamically deriving ranges from the keyboard
// count, they are hardcoded so they are easier to fine-tune.
export const keyboardRanges = derived(keyboardCount, ($count) =>
	$count === 1
		? [['C2', 'B5'] as NoteRange]
		: $count === 2
		? [['C2', 'B3'] as NoteRange, ['C4', 'B5'] as NoteRange]
		: [
				['C1', 'B2'] as NoteRange,
				['C3', 'B4'] as NoteRange,
				['C5', 'B6'] as NoteRange
		  ]
);

export const fretboard = writable<Fretboard>({
	fretCount: 15,
	tuning: Tunings.guitarStandard.tuning
});

export const playableFrets = derived(
	[fretboard, scale, rootPitchClass],
	([$fretboard, $scale, $root]) =>
		$scale ? fingering($fretboard, $scale, $root) : []
);

export const instrument = writable<Instrument>('keyboard');
