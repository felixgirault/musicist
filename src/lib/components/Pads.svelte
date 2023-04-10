<script lang="ts">
	import type {Note} from '$lib/notes';
	import {playedNotes} from '$lib/stores';

	const touches = new Map<number, Note>();

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
		const note = element?.dataset?.note as Note | undefined;

		if (note) {
			deselectCurrentText();
			playedNotes.start(note);
		}
	};

	const handleStop = ({target}: MouseEvent) => {
		const element = target as HTMLElement;
		const note = element?.dataset?.note as Note | undefined;

		if (note) {
			playedNotes.stop(note);
		}
	};

	const handleTouchStart = (event: TouchEvent) => {
		event.preventDefault();

		for (let i = 0; i < event.changedTouches.length; i++) {
			const touch = event.changedTouches[i];
			const element = touch.target as HTMLElement;
			const note = element?.dataset?.note as Note | undefined;

			if (note) {
				playedNotes.start(note);
				touches.set(touch.identifier, note);
			}
		}
	};

	// @TODO Debounce this to avoid too many calls to
	// `document.elementFromPoint()`.
	const handleTouchMove = (event: TouchEvent) => {
		event.preventDefault();

		for (let i = 0; i < event.changedTouches.length; i++) {
			const touch = event.changedTouches[i];
			const element = document.elementFromPoint(
				touch.clientX,
				touch.clientY
			) as HTMLElement;
			const note = element?.dataset?.note as Note | undefined;
			const previousNote = touches.get(touch.identifier);

			if (note !== previousNote) {
				if (previousNote) {
					playedNotes.stop(previousNote);
					touches.delete(touch.identifier);
				}

				if (note) {
					playedNotes.start(note);
					touches.set(touch.identifier, note);
				}
			}
		}
	};

	const handleTouchEnd = (event: TouchEvent) => {
		event.preventDefault();

		for (let i = 0; i < event.changedTouches.length; i++) {
			const touch = event.changedTouches[i];
			const element = document.elementFromPoint(
				touch.clientX,
				touch.clientY
			) as HTMLElement;
			const note = element?.dataset?.note as Note | undefined;

			if (note) {
				playedNotes.stop(note);
			}

			touches.delete(touch.identifier);
		}
	};
</script>

<div
	on:mouseover={handleStart}
	on:mousedown={handleStart}
	on:mouseup={handleStop}
	on:mouseout={handleStop}
	on:touchstart={handleTouchStart}
	on:touchmove={handleTouchMove}
	on:touchend={handleTouchEnd}
	on:focus={() => {}}
	on:blur={() => {}}
>
	<slot />
</div>
