<script type="ts">
	import {InstrumentNames} from '$lib/instruments';
	import {instrument} from '$lib/stores';
</script>

<div>
	<label for="InstrumentSelector-type">Instrument</label>

	<select
		id="InstrumentSelector-type"
		name="type"
		bind:value={$instrument}
	>
		{#each Object.entries(InstrumentNames) as [type, name]}
			<option value={type}>{name}</option>
		{/each}
	</select>
</div>
