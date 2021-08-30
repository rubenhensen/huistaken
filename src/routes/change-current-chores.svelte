<script lang="ts">
	import { chores, names, currentMatching } from '../stores';
</script>

<form>
	<div class="row">
		<div class="three columns">
			<b>Namen</b>
		</div>
		<div class="three columns">
			<b>Taken</b>
		</div>
	</div>

	{#each $names as { name }, i}
		<div class="row">
			<div class="three columns">
				<p>{name}</p>
			</div>

			<div class="three columns">
				<select bind:value={$currentMatching[i].choreId} name="" id="">
					{#each $chores as { id, chore }, i}
						<option value={id}>{chore}</option>
					{/each}
				</select>
			</div>
		</div>
	{/each}
</form>
