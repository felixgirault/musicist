<script lang="ts">
	import {
		type Note,
		chromaticRange,
		notePitchClass
	} from '$lib/notes';
	import {playablePitchClasses} from '$lib/stores';

	export let firstNote: Note = 'C2';
	export let lastNote: Note = 'C6';
</script>

<ul class="keyboard">
	{#each chromaticRange(firstNote, lastNote) as note}
		<li>
			<button
				class:sharp={note.includes('#')}
				class:scale={$playablePitchClasses.includes(
					notePitchClass(note)
				)}
				data-note={note}
			>
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

	.scale {
		background: red;
	}
</style>
