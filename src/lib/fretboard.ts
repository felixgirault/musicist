import {sum} from './arrays';

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
