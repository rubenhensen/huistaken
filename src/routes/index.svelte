<script lang="ts">
	import { currentMatching, chores, names } from '../stores';
	import Fa from 'svelte-fa';
	import { faCopy } from '@fortawesome/free-solid-svg-icons';

	const copyToClipboard = () => {
		let text = "";
		$currentMatching.forEach(match => {
			let chore = $chores.find((x) => x.id === match.choreId).chore;
			text = text + chore + "\r\n";
		});
		navigator.clipboard.writeText(text).then();
	}
</script>

<!-- <a href="/"><Fa icon={faAngleDoubleLeft} /></a> 27 mei <a href="/"><Fa icon={faAngleDoubleRight} /></a> -->
<table class="u-full-width">
	<thead>
		<tr>
			<th>Naam</th>
			<th>Huistaak</th>
		</tr>
	</thead>
	<tbody>
		{#each $currentMatching as { personId, choreId, completed }, i}
			<tr>
				<td>{$names.find((x) => x.id === personId).name}</td>
				<td>{$chores.find((x) => x.id === choreId).chore}</td>
			</tr>
		{/each}
	</tbody>
</table>

<button on:click={copyToClipboard}>
	<Fa
	size="1x"
	icon={faCopy}
	primaryColor="green"
	/>
</button>
