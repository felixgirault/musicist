<script lang="ts">
	import {chromaticRange} from '$lib/notes';
	import {playedNotes} from '$lib/stores';
	import type {Note} from '../types';

	export let firstNote: Note = 'C2';
	export let lastNote: Note = 'C6';

	const handleStart = ({target, buttons}: MouseEvent) => {
		if (buttons !== 1) {
			return;
		}

		const element = target as HTMLElement;
		const note = element?.dataset?.note;

		if (note) {
			playedNotes.start(note as Note);
		}
	};

	const handleStop = ({target}: MouseEvent) => {
		const element = target as HTMLElement;
		const note = element?.dataset?.note;

		if (note) {
			playedNotes.stop(note as Note);
		}
	};
</script>

<ul
	class="keyboard"
	on:mouseover={handleStart}
	on:mousedown={handleStart}
	on:mouseup={handleStop}
	on:mouseout={handleStop}
	on:focus={() => {}}
	on:blur={() => {}}
>
	{#each chromaticRange(firstNote, lastNote) as note}
		<li>
			<button
				class:sharp={note.includes('#')}
				data-note={note}
			>
				{note}
			</button>
		</li>
	{/each}
</ul>

<style>
	.keyboard {
		display: flex;
		flex-direction: row;
		list-style: none;
	}

	.sharp {
		filter: invert(1);
	}
</style>
