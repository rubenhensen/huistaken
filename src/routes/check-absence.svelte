<script lang="ts">
	import {
		absence,
		names,
		nrPresent,
		currentMatching,
		archiveWeeks,
		chores
	} from '../stores';
	import YesNo from '../lib/YesNo.svelte';
	import { matchAndUpdate } from '../matching';
	import { goto } from '$app/navigation';

	function click() {
		// Check number of absences
		$nrPresent = $absence.filter((n) => n.present).length;
		let match = matchAndUpdate(true, currentMatching, archiveWeeks, chores, names, absence);
		currentMatching.set(match);
		goto('/');
	}
</script>

<table class="u-full-width">
	<thead>
		<tr>
			<th>Naam</th>
			<th>Thuis?</th>
		</tr>
	</thead>
	<tbody>
		{#each $absence as { personId, present }, i}
			<tr>
				<td>{$names.find((x) => x.id === personId).name}</td>
				<td><YesNo bind:completed={present} /></td>
			</tr>
		{/each}
	</tbody>
</table>

<button class="button button-primary active" on:click={click}> Volgende </button>
