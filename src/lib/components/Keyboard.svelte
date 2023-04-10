<script lang="ts">
	import {type Note, chromaticRange} from '$lib/notes';
	import Pad from './Pad.svelte';

	export let firstNote: Note = 'C2';
	export let lastNote: Note = 'C6';
</script>

<ul class="keyboard">
	{#each chromaticRange(firstNote, lastNote) as note}
		<li>
			<Pad {note} isInverted={note.includes('#')} />
		</li>
	{/each}
</ul>

<style>
	.keyboard {
		display: flex;
		flex-direction: row;
		list-style: none;
	}
</style>
