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

	$: isDisabled = $activeChores.filter((n) => n.activeChore).length !== $nrPresent;

	function click() {
		let match = matchAndUpdate(currentMatching, archiveWeeks, chores, names, absence, activeChores);
		currentMatching.set(match);
		goto('/');
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
		{#each $activeChores as { choreId, activeChore }, i}
			<tr>
				<td>{$chores.find((x) => x.id === choreId).chore}</td>
				<td><YesNo bind:completed={activeChore} /></td>
			</tr>
		{/each}
	</tbody>
</table>

<button class="button button-primary active" on:click={click} disabled={isDisabled}>
	Volgende
</button>

<style>
	button:disabled,
	button[disabled] {
		border: 1px solid #999999;
		background-color: #cccccc;
		color: #666666;
	}

	button[disabled]:hover {
		border: 1px solid #999999;
		background-color: #cccccc;
		color: #666666;
	}
</style>
