import type {Note} from './notes';

type Tuning = Note[];
type TuningDefinition = {
	label: string;
	tuning: Tuning;
};

export const Tunings: Record<string, TuningDefinition> = {
	guitarStandard: {
		label: 'Guitar - standard',
		tuning: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4']
	},
	guitarDropD: {
		label: 'Guitar - Drop D',
		tuning: ['D2', 'A2', 'D3', 'G3', 'B3', 'E4']
	},

	guitar7Standard: {
		label: '7-string guitar - standard',
		tuning: ['B1', 'E2', 'A2', 'D3', 'G3', 'B3', 'E4']
	},
	guitar7DropA: {
		label: '7-string guitar - drop A',
		tuning: ['A1', 'E2', 'A2', 'D3', 'G3', 'B3', 'E4']
	},

	guitar8Standard: {
		label: '8-string guitar - standard',
		tuning: ['F#1', 'B1', 'E2', 'A2', 'D3', 'G3', 'B3', 'E4']
	},

	guitar8DropE: {
		label: '8-string guitar - drop E',
		tuning: ['E1', 'B1', 'E2', 'A2', 'D3', 'G3', 'B3', 'E4']
	},

	bassStandard: {
		label: 'Bass - standard',
		tuning: ['E1', 'A1', 'D2', 'G2']
	},
	bass5Standard: {
		label: '5-string Bass - standard',
		tuning: ['B0', 'E1', 'A1', 'D2', 'G2']
	},
	ukuleleStandard: {
		label: 'Ukulele - standard',
		tuning: ['G4', 'C4', 'E4', 'A4']
	},
	charangoStandard: {
		label: 'Charango - standard',
		tuning: ['G4', 'C5', 'E4', 'A4', 'E5']
	}
};
