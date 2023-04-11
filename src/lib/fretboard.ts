import {sum} from './arrays';
import {
	type Note,
	type PitchClass,
	PitchClasses,
	notePitchClass
} from './notes';
import type {Scale} from './scales';

export type Fretboard = {
	tuning: Note[];
	fretCount: number;
};

// Magic constant representing the relationship in size
// between two frets.
// This is not an accurate value but it is more visually
// pleasing than the real one.
const FretRatio = 1.055;

// Builds a list of fret sizes as percentages, so they all
// add up to 100%.
export const fretRatios = (count: number) => {
	const ratios = Array(count)
		.fill(0)
		.reduce(
			(r) => r.concat((r?.[r.length - 1] ?? 1) / FretRatio),
			[] as number[]
		);

	const total = sum(ratios);
	return ratios.map((r) => (r / total) * 100);
};

// Finds a playable fingering for the given scale, ensuring
// there is not too much notes per string, and there is no
// excessive finger stretch between notes.
export const fingering = (
	fretboard: Fretboard,
	scale: Scale,
	root: PitchClass,
	{
		maxNotesPerString = 4,
		maxStretch = 4
	}: {
		maxNotesPerString?: number;
		maxStretch?: number;
	} = {}
) => {
	// In the rest of the function, PCI stands for "pitch
	// class index", to shorten variable names a bit.
	// Everything is computed by comparing the index of pitch
	// classes in the full pitch class list, as to speed up
	// computations by avoiding comparing notes, transposing
	// them, etc.
	const rootPci = PitchClasses.indexOf(root);
	const openPcis = fretboard.tuning.map((note) =>
		PitchClasses.indexOf(notePitchClass(note))
	);

	const scalePcis = scale.chroma
		.split('')
		.reduce(
			(pcis, chroma, i) =>
				chroma === '1'
					? pcis.concat((rootPci + i) % PitchClasses.length)
					: pcis,
			[] as number[]
		);

	const indices: number[][] = openPcis.map(() => []);

	let nextScalePciIndex = 0;
	let rootFretIndex = -1;

	for (
		let stringIndex = 0;
		stringIndex < openPcis.length;
		stringIndex++
	) {
		const openPci = openPcis[stringIndex];
		let pressedFretCount = 0;

		for (
			let fretIndex = 0;
			fretIndex < fretboard.fretCount;
			fretIndex++
		) {
			const currentPci =
				(openPci + fretIndex) % PitchClasses.length;
			const nextScalePci = scalePcis[nextScalePciIndex];

			// Skips notes until the root is found.
			if (rootFretIndex < 0) {
				if (currentPci === nextScalePci) {
					rootFretIndex = fretIndex;
				} else {
					continue;
				}
			}

			if (currentPci !== nextScalePci) {
				continue;
			}

			// Is the finger stretch required to play this note
			// too wide?
			if (Math.abs(rootFretIndex - fretIndex) > maxStretch) {
				break;
			}

			pressedFretCount++;
			nextScalePciIndex =
				(nextScalePciIndex + 1) % scalePcis.length;
			indices[stringIndex].push(fretIndex);

			if (pressedFretCount >= maxNotesPerString) {
				break;
			}
		}
	}

	return indices;
};
