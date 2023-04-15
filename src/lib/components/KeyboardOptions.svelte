<script lang="ts">
	import {keyboardCount} from '$lib/stores';
</script>

<div>
	<label for="KeyboardOptions-count">Rows</label>
	<input
		id="KeyboardOptions-count"
		name="fretCount"
		type="number"
		min={1}
		max={3}
		bind:value={$keyboardCount}
	/>
</div>
