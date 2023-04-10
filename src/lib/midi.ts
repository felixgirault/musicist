import {midiToNoteName} from '@tonaljs/midi';
import type {Note} from './notes';

export enum MidiMessageType {
	noteOn = 144,
	noteOff = 128
}

export const noteFromMidi = (key: number) =>
	midiToNoteName(key, {
		sharps: true
	}) as Note;
