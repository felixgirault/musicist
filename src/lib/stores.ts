import {diff} from 'fast-array-diff';
import {
	type Readable,
	derived,
	get,
	readonly,
	writable
} from 'svelte/store';
import {withValue, withoutValue} from './arrays';
import type {Note} from './notes';

const diffStore = <T>(store: Readable<T[]>) => {
	let previous = get(store);

	return derived(store, ($values) => {
		const d = diff(previous, $values);
		previous = $values;
		return d;
	});
};

const playableNotesStore = () => {
	const notes = writable<Note[]>([]);
	const diff = diffStore(notes);

	const start = (note: Note) => {
		notes.update(($notes) => withValue($notes, note));
	};

	const stop = (note: Note) => {
		notes.update(($notes) => withoutValue($notes, note));
	};

	return {
		notes: readonly(notes),
		diff,
		start,
		stop
	};
};

export const playedNotes = playableNotesStore();
