<script lang="ts">
	import {onMount} from 'svelte';
	import {forEach} from '$lib/iterators';
	import {MidiMessageType, noteFromMidi} from '$lib/midi';
	import {playedNotes} from '$lib/stores';

	const handleMidiMessage = (event: MIDIMessageEvent) => {
		const [type, key] = event.data;
		const note = noteFromMidi(key);

		switch (type) {
			case MidiMessageType.noteOn:
				playedNotes.start(note);
				break;

			case MidiMessageType.noteOff:
				playedNotes.stop(note);
				break;
		}
	};

	onMount(async () => {
		if (!navigator?.requestMIDIAccess) {
			return;
		}

		const midi = await navigator.requestMIDIAccess();

		forEach(midi.inputs.values(), (input) => {
			input.onmidimessage = handleMidiMessage;
		});
	});
</script>
