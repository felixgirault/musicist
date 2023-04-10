<script lang="ts">
	import type {Note} from '$lib/notes';
	import {playedNotes} from '$lib/stores';

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

<div
	on:mouseover={handleStart}
	on:mousedown={handleStart}
	on:mouseup={handleStop}
	on:mouseout={handleStop}
	on:focus={() => {}}
	on:blur={() => {}}
>
	<slot />
</div>
