<script lang="ts">
	import {diff as fastDiff} from 'fast-array-diff';
	import {onMount} from 'svelte';
	import {PolySynth, Synth} from 'tone';
	import {playedNotes} from '$lib/stores';

	let previousNotes = $playedNotes;
	let synth: PolySynth;

	onMount(() => {
		synth = new PolySynth(Synth, {
			oscillator: {
				type: 'fattriangle'
			}
		}).toDestination();
	});

	$: {
		const diff = fastDiff(previousNotes, $playedNotes);
		synth?.triggerAttack(diff.added);
		synth?.triggerRelease(diff.removed);
		previousNotes = $playedNotes;
	}
</script>
