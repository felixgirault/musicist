<script lang="ts">
	import {areOutOfScaleNotesMuted, scale} from '$lib/stores';
</script>

{#if $scale}
	<div>
		<label for="SynthOptions-mute">Cheat</label>
		<input
			id="SynthOptions-mute"
			type="checkbox"
			name="mute"
			bind:checked={$areOutOfScaleNotesMuted}
		/>
	</div>
{/if}
