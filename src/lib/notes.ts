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

export const chromaticRange = (first: Note, last: Note) =>
	Range.chromatic([first, last], {sharps: true}) as Note[];
