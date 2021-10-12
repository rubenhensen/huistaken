<script lang="ts">
	import { currentMatching, names, chores, archiveWeeks, absence } from '../stores';
	import YesNo from '../lib/YesNo.svelte';
import { matchAndUpdate } from 'src/matching';
import { goto } from '$app/navigation';

	
	function click() {
		// Check number of absences
		let match = matchAndUpdate(true, currentMatching, archiveWeeks, chores, names, absence);
		currentMatching.set(match);
		goto('/');
	}
</script>

<table class="u-full-width">
	<thead>
		<tr>
			<th>Naam</th>
			<th>Taak</th>
			<th>Gedaan?</th>
		</tr>
	</thead>
	<tbody>
		{#each $currentMatching as { personId, choreId, completed }, i}
			<tr>
				<td>{$names.find((x) => x.id === personId).name}</td>
				<td>{$chores.find((x) => x.id === choreId).chore}</td>
				<td><YesNo bind:completed /></td>
			</tr>
		{/each}
	</tbody>
</table>

<button on:click={click} class="button button-primary active"> Volgende </button>
