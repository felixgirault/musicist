<script lang="ts">
	import {indexBy, sortBy} from '$lib/arrays';
	import {PitchClasses} from '$lib/notes';
	import {allScales} from '$lib/scales';
	import {rootPitchClass, scale} from '$lib/stores';

	const scales = allScales();
	const sortedScales = sortBy(scales, 'name', (a, b) =>
		a.localeCompare(b)
	);

	const indexedScales = indexBy(scales, 'chroma');

	let scaleChroma = '';

	$: $scale = indexedScales?.[scaleChroma];
</script>

<div>
	<label for="ScaleSelector-root">Root</label>

	<select
		id="ScaleSelector-root"
		name="root"
		bind:value={$rootPitchClass}
	>
		{#each PitchClasses as pitchClass}
			<option value={pitchClass}>{pitchClass}</option>
		{/each}
	</select>
</div>

<div class="chroma">
	<label for="ScaleSelector-chroma">Scale</label>

	<select
		id="ScaleSelector-chroma"
		name="chroma"
		bind:value={scaleChroma}
	>
		<option value="">None</option>

		{#each sortedScales as { name, aliases, chroma }}
			<option value={chroma}>
				{name}
				{#if aliases.length}
					({aliases.join(', ')})
				{/if}
			</option>
		{/each}
	</select>
</div>

<style>
	.chroma {
		min-width: 10ch;
	}
</style>
