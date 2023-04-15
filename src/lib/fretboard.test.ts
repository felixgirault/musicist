import {ScaleType} from '@tonaljs/tonal';
import {describe, expect, test} from 'vitest';
import {fingering} from './fretboard';
import type {Note, PitchClass} from './notes';

describe('fingering', () => {
	const fretboard = {
		tuning: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'] as Note[],
		fretCount: 12
	};

	test.each<[PitchClass, string]>([
		['A', 'chromatic'],
		['A', 'flamenco'],
		['A', 'major blues'],
		['A', 'minor pentatonic']
	])('fingering for %s %s', (root, scale) => {
		expect(
			fingering(fretboard, ScaleType.get(scale), root)
		).toMatchSnapshot();
	});
});
