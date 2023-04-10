import {get} from '@tonaljs/pcset';
import {all} from '@tonaljs/scale-type';
import {type PitchClass, transposeFromPitchClass} from './notes';

export type Scale = {
	name: string;
	aliases: string[];
	chroma: ScaleChroma;
};

type ScaleChroma = string;

export const allScales = () =>
	all().map(
		({name, aliases, chroma}) =>
			({
				name,
				aliases,
				chroma
			} as Scale)
	);

export const scalePitchClasses = (
	scale: Scale,
	root: PitchClass
) =>
	get(scale.chroma).intervals.map(
		transposeFromPitchClass(root)
	);
