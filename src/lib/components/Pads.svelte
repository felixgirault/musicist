<script lang="ts">
	import type {Note} from '$lib/notes';
	import {playedNotes} from '$lib/stores';

	// In case the user started selecting text, deselects it
	// so it doesn't mess with the pads UI.
	const deselectCurrentText = () => {
		let selection = window.getSelection();

		if (selection && selection.rangeCount > 0) {
			for (let i = 0; i < selection.rangeCount; i++) {
				selection.removeRange(selection.getRangeAt(i));
			}
		}
	};

	const handleStart = ({target, buttons}: MouseEvent) => {
		if (buttons !== 1) {
			return;
		}

		const element = target as HTMLElement;
		const note = element?.dataset?.note;

		if (note) {
			deselectCurrentText();
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
