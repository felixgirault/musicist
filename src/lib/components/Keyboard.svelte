<script lang="ts">
	import {chromaticRange} from '$lib/notes';
	import type {Note} from '../types';

	export let firstNote: Note = 'C2';
	export let lastNote: Note = 'C6';
</script>

<ul class="keyboard">
	{#each chromaticRange(firstNote, lastNote) as note}
		<li>
			<button class:sharp={note.includes('#')}>
				{note}
			</button>
		</li>
	{/each}
</ul>

<style>
	.keyboard {
		display: flex;
		flex-direction: row;
		list-style: none;
	}

	.sharp {
		filter: invert(1);
	}
</style>
