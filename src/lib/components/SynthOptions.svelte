<script lang="ts">
	import {areOutOfScaleNotesMuted} from '$lib/stores';
</script>

<div>
	<label for="SynthOptions-mute">Cheat</label>
	<input
		id="SynthOptions-mute"
		type="checkbox"
		name="mute"
		bind:checked={$areOutOfScaleNotesMuted}
	/>
</div>
