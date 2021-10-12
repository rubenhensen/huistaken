<script lang="ts">
	import { currentMatching, names, chores } from '../stores';
	import YesNo from '../lib/YesNo.svelte';
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

<a href="/check-absence"><button class="button button-primary active"> Volgende </button></a>
