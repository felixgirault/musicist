<script lang="ts">
	import {diff as fastDiff} from 'fast-array-diff';
	import {onMount} from 'svelte';
	import {PolySynth, Synth} from 'tone';
	import {filterNotesByPitchClasses} from '$lib/notes';
	import {
		areOutOfScaleNotesMuted,
		playablePitchClasses,
		playedNotes
	} from '$lib/stores';

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
		const added =
			diff.added &&
			$areOutOfScaleNotesMuted &&
			$playablePitchClasses.length
				? filterNotesByPitchClasses(
						diff.added,
						$playablePitchClasses
				  )
				: diff.added;

		synth?.triggerAttack(added);
		synth?.triggerRelease(diff.removed);
		previousNotes = $playedNotes;
	}
</script>
