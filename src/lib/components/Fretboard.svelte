<script lang="ts">
	import {range, reverse} from '$lib/arrays';
	import {
		chromaticRange,
		notePitchClass,
		transposeNote
	} from '$lib/notes';
	import {
		playablePitchClasses,
		stringsTuning
	} from '$lib/stores';

	export let fretCount = 24;

	$: strings = $stringsTuning.map((first) =>
		chromaticRange(first, transposeNote(first, fretCount))
	);

	$: reversedStrings = reverse(strings);
</script>

<table>
	<thead>
		<tr>
			{#each range(fretCount + 1) as i}
				<th scope="col">{i}</th>
			{/each}
		</tr>
	</thead>

	<tbody>
		{#each reversedStrings as string}
			<tr>
				{#each string as note, index}
					<svelte:element
						this={index === 0 ? 'th' : 'td'}
						scope={index === 0 ? 'row' : null}
					>
						<button
							class:scale={$playablePitchClasses.includes(
								notePitchClass(note)
							)}
							data-note={note}
						>
							{note}
						</button>
					</svelte:element>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<style>
	.scale {
		background: red;
	}
</style>
