<script lang="ts">
	import {keyboardCount} from '$lib/stores';
</script>

<fieldset>
	<legend>Rows</legend>

	<div class="options">
		{#each [1, 2] as count}
			<input
				class="hidden button-trigger"
				id="KeyboardOptions-count--{count}"
				name="keyboardCount"
				type="radio"
				value={count}
				bind:group={$keyboardCount}
			/>

			<label
				class="button"
				for="KeyboardOptions-count--{count}"
			>
				{count}
			</label>
		{/each}
	</div>
</fieldset>

<style>
	.options {
		display: flex;
		gap: var(--spacing-0_5);
	}
</style>
