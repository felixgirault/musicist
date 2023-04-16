<script lang="ts">
	import AudioContext from '$lib/components/AudioContext.svelte';
	import Fretboard from '$lib/components/Fretboard.svelte';
	import FretboardOptions from '$lib/components/FretboardOptions.svelte';
	import InstrumentSelector from '$lib/components/InstrumentSelector.svelte';
	import KeyboardOptions from '$lib/components/KeyboardOptions.svelte';
	import Keyboards from '$lib/components/Keyboards.svelte';
	import MidiInput from '$lib/components/MidiInput.svelte';
	import Pads from '$lib/components/Pads.svelte';
	import ScaleSelector from '$lib/components/ScaleSelector.svelte';
	import Synth from '$lib/components/Synth.svelte';
	import SynthOptions from '$lib/components/SynthOptions.svelte';
	import Toolbar from '$lib/components/Toolbar.svelte';
	import {instrument} from '$lib/stores';
	import '../app.css';
</script>

<svelte:head>
	<title>Musicist</title>
</svelte:head>

<Toolbar>
	<ScaleSelector />
	<SynthOptions />
	<InstrumentSelector />

	{#if $instrument === 'keyboard'}
		<KeyboardOptions />
	{:else if $instrument === 'fretboard'}
		<FretboardOptions />
	{/if}
</Toolbar>

<Pads>
	<svelte:component
		this={$instrument === 'keyboard' ? Keyboards : Fretboard}
	/>
</Pads>

<AudioContext />
<MidiInput />
<Synth />
