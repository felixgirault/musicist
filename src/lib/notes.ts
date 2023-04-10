import {Range} from '@tonaljs/tonal';
import type {Note} from './types';

export const chromaticRange = (first: Note, last: Note) =>
	Range.chromatic([first, last], {sharps: true}) as Note[];
