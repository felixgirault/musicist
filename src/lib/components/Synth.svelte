<script lang="ts">
	import {onMount} from 'svelte';
	import {PolySynth, Synth} from 'tone';
	import {playedNotes} from '$lib/stores';

	const {started, stopped} = playedNotes;
	let synth: PolySynth;

	onMount(() => {
		synth = new PolySynth(Synth, {
			oscillator: {
				type: 'fattriangle'
			}
		}).toDestination();
	});

	$: $started && synth?.triggerAttack($started);
	$: $stopped && synth?.triggerRelease($stopped);
</script>
