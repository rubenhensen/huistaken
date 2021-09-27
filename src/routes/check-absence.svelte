<script lang="ts">
	import {
		absence,
		names,
		nrPresent,
		currentMatching,
		archiveWeeks,
		activeChores,
		chores
	} from '../stores';
	import YesNo from '../lib/YesNo.svelte';
	import { matchAndUpdate } from '../matching';
	import { goto } from '$app/navigation';

	function click() {
		// Check number of absences
		$nrPresent = $absence.filter((n) => n.present).length;
		if ($nrPresent < 10) {
			goto('/choose-chores');
		} else {
			$activeChores.forEach((n) => (n.activeChore = true));
			let match = matchAndUpdate(
				true,
				currentMatching,
				archiveWeeks,
				chores,
				names,
				absence,
				activeChores
			);
			currentMatching.set(match);
			goto('/');
		}
	}
</script>

<!-- <a href="/"><Fa icon={faAngleDoubleLeft} /></a> 27 mei <a href="/"><Fa icon={faAngleDoubleRight} /></a> -->
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
