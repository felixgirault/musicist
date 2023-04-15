<script lang="ts">
	import {range, reverse} from '$lib/arrays';
	import {fretRatios} from '$lib/fretboard';
	import {chromaticRange, transposeNote} from '$lib/notes';
	import {fretboard, playableFrets} from '$lib/stores';
	import Pad from './Pad.svelte';

	$: strings = $fretboard.tuning.map((first) =>
		chromaticRange(
			first,
			transposeNote(first, $fretboard.fretCount)
		)
	);

	$: reversedStrings = reverse(strings);
	$: ratios = fretRatios($fretboard.fretCount);
</script>

<div class="container">
	<table>
		<thead>
			<tr>
				{#each range($fretboard.fretCount + 1) as i}
					<th scope="col">{i}</th>
				{/each}
			</tr>
		</thead>

		<tbody>
			{#each reversedStrings as string, stringIndex}
				<tr>
					{#each string as note, fretIndex}
						<svelte:element
							this={fretIndex === 0 ? 'th' : 'td'}
							scope={fretIndex === 0 ? 'row' : null}
							style={fretIndex === 0
								? null
								: `width: ${ratios[fretIndex - 1]}%`}
						>
							<Pad
								isFlipped
								isInverted={$playableFrets?.[
									reversedStrings.length -
										1 -
										stringIndex
								]?.includes(fretIndex)}
								{note}
							/>
						</svelte:element>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.container {
		height: 100%;
		overflow-x: hidden;
	}

	table {
		min-width: 100%;
		height: 100%;
	}

	table :global(button) {
		width: 100%;
		height: 100%;
	}

	[scope='col'] {
		font-size: var(--font-size-small);
	}
</style>
