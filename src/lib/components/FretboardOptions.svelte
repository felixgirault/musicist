<script lang="ts">
	import {fretboard} from '$lib/stores';
	import {Tunings} from '$lib/tunings';

	let tuningKey: keyof typeof Tunings = 'guitarStandard';

	$: $fretboard.tuning = Tunings[tuningKey].tuning;
</script>

<div>
	<label for="FretboardOptions-fretCount">Frets</label>
	<input
		id="FretboardOptions-fretCount"
		name="fretCount"
		type="number"
		min={5}
		max={24}
		bind:value={$fretboard.fretCount}
	/>
</div>

<div class="tuning">
	<label for="FretboardOptions-tuning">Tuning</label>
	<select
		id="FretboardOptions-tuning"
		name="tuning"
		bind:value={tuningKey}
	>
		{#each Object.entries(Tunings) as [key, { label, tuning }]}
			<option value={key}>{label}</option>
		{/each}
	</select>
</div>

<style>
	.tuning {
		min-width: 10ch;
	}
</style>
