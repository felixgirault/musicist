<script lang="ts">
	import AudioContext from '$lib/components/AudioContext.svelte';
	import Fretboard from '$lib/components/Fretboard.svelte';
	import InstrumentSelector from '$lib/components/InstrumentSelector.svelte';
	import Keyboard from '$lib/components/Keyboard.svelte';
	import MidiInput from '$lib/components/MidiInput.svelte';
	import Pads from '$lib/components/Pads.svelte';
	import ScaleSelector from '$lib/components/ScaleSelector.svelte';
	import Synth from '$lib/components/Synth.svelte';
	import SynthOptions from '$lib/components/SynthOptions.svelte';
	import Toolbar from '$lib/components/Toolbar.svelte';
	import {instrument} from '$lib/stores';
	import '../app.css';
</script>

<Toolbar>
	<ScaleSelector />
	<SynthOptions />
	<InstrumentSelector />
</Toolbar>

<Pads>
	<svelte:component
		this={$instrument === 'keyboard' ? Keyboard : Fretboard}
	/>
</Pads>

<AudioContext />
<MidiInput />
<Synth />
