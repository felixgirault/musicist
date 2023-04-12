import {fromSemitones} from '@tonaljs/interval';
import {midiToNoteName} from '@tonaljs/midi';
import {
	get,
	pitchClass as tonalPitchClass,
	transpose,
	transposeFrom
} from '@tonaljs/note';
import {Range} from '@tonaljs/tonal';

export type PitchClass =
	| 'C'
	| 'C#'
	| 'D'
	| 'D#'
	| 'E'
	| 'F'
	| 'F#'
	| 'G'
	| 'G#'
	| 'A'
	| 'A#'
	| 'B';

export type Octave = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type Note = `${PitchClass}${Octave}`;

export const PitchClasses: readonly PitchClass[] = [
	'C',
	'C#',
	'D',
	'D#',
	'E',
	'F',
	'F#',
	'G',
	'G#',
	'A',
	'A#',
	'B'
];

// Note.simplify() but always using sharps
// @see https://github.com/tonaljs/tonal/blob/main/packages/note/index.ts#L216
export const simplifyPitchClass = (pitchClass: PitchClass) => {
	const note = get(pitchClass);

	if (note.empty) {
		return pitchClass;
	}

	return midiToNoteName(note.chroma, {
		sharps: true,
		pitchClass: true
	}) as PitchClass;
};

export const notePitchClass = (note: Note) =>
	simplifyPitchClass(tonalPitchClass(note) as PitchClass);

export const filterNotesByPitchClasses = (
	notes: Note[],
	pitchClasses: PitchClass[]
) =>
	notes.filter((note) =>
		pitchClasses.includes(notePitchClass(note))
	);

export const transposeFromPitchClass = (
	pitchClass: PitchClass
) => {
	const transpose = transposeFrom(pitchClass);
	return (interval: string) =>
		simplifyPitchClass(transpose(interval) as PitchClass);
};

export const transposeNote = (note: Note, semitones: number) =>
	transpose(note, fromSemitones(semitones)) as Note;

export const chromaticRange = (first: Note, last: Note) =>
	Range.chromatic([first, last], {sharps: true}) as Note[];
