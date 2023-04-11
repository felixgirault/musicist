import {derived, readonly, writable} from 'svelte/store';
import {withValue, withoutValue} from './arrays';
import type {Instrument} from './instruments';
import {type Note, type PitchClass, PitchClasses} from './notes';
import {type Scale, scalePitchClasses} from './scales';

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

export const stringsTuning = writable<Note[]>([
	'E2',
	'A2',
	'D3',
	'G3',
	'B3',
	'E4'
]);

export const instrument = writable<Instrument>('keyboard');
