<script lang="ts">
	import {
		playablePitchClasses,
		rootPitchClass,
		scale
	} from '$lib/stores';

	const formatter = new Intl.ListFormat('en', {
		style: 'long',
		type: 'conjunction'
	});

	// A message intended to screen-reader users, announcing
	// playable pitch classes for the currently selected scale.
	$: message = $playablePitchClasses.length
		? `${$rootPitchClass} ${
				$scale!.name
		  } notes are ${formatter.format($playablePitchClasses)}`
		: '';
</script>

<p class="hidden" aria-live="polite">{message}</p>
