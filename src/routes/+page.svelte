<script lang="ts">
	import AudioContext from '$lib/components/AudioContext.svelte';
	import Fretboard from '$lib/components/Fretboard.svelte';
	import Keyboard from '$lib/components/Keyboard.svelte';
	import MidiInput from '$lib/components/MidiInput.svelte';
	import Pads from '$lib/components/Pads.svelte';
	import ScaleSelector from '$lib/components/ScaleSelector.svelte';
	import Synth from '$lib/components/Synth.svelte';
</script>

<AudioContext />
<MidiInput />
<ScaleSelector />
<Pads>
	<Keyboard />
	<Fretboard />
</Pads>
<Synth />
