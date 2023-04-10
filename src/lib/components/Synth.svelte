<script lang="ts">
	import type {DiffData} from 'fast-array-diff';
	import {onMount} from 'svelte';
	import {PolySynth, Synth} from 'tone';
	import type {Note} from '$lib/notes';
	import {playedNotes} from '$lib/stores';

	const {diff} = playedNotes;
	let synth: PolySynth;

	const triggerNotes = (diff: DiffData<Note>) => {
		synth?.triggerAttack(diff.added);
		synth?.triggerRelease(diff.removed);
	};

	onMount(() => {
		synth = new PolySynth(Synth, {
			oscillator: {
				type: 'fattriangle'
			}
		}).toDestination();
	});

	$: triggerNotes($diff);
</script>
