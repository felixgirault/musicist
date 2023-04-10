import {readonly, writable} from 'svelte/store';
import {withValue, withoutValue} from './arrays';
import type {Note} from './notes';

const playableNotesStore = () => {
	const notes = writable<Note[]>([]);
	const started = writable<Note | undefined>();
	const stopped = writable<Note | undefined>();

	const start = (note: Note) => {
		notes.update(($notes) => withValue($notes, note));
		started.set(note);
	};

	const stop = (note: Note) => {
		notes.update(($notes) => withoutValue($notes, note));
		stopped.set(note);
	};

	return {
		notes: readonly(notes),
		started: readonly(started),
		stopped: readonly(stopped),
		start,
		stop
	};
};

export const playedNotes = playableNotesStore();
