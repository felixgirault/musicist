<script lang="ts">
	import {range, reverse} from '$lib/arrays';
	import {chromaticRange, transposeNote} from '$lib/notes';
	import {stringsTuning} from '$lib/stores';
	import Pad from './Pad.svelte';

	export let fretCount = 17;

	$: strings = $stringsTuning.map((first) =>
		chromaticRange(first, transposeNote(first, fretCount))
	);

	$: reversedStrings = reverse(strings);
</script>

<div class="container">
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
							<Pad {note} />
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
