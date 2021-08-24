<script lang="ts">
	import { chores, names, archiveWeeks } from "../stores";
	import YesNo from "../components/YesNo.svelte";
	import { navigate } from "svelte-routing";
	export const location = null;

	function click(recent) {
		let newHistory = []
		for (let i = 0; i < $names.length; i++) {
			let obj = { 
				personId: i, 
				choreId: selectedChore[i], 
				completed: selectedDone[i] };
			newHistory = [...newHistory, obj];
		}
		if (recent) {
			archiveWeeks.set([...$archiveWeeks, newHistory])
			navigate('/')
		} else {
			archiveWeeks.set([newHistory, ...$archiveWeeks])
			navigate('/')
		}
	}

	let selectedChore = [];
	let selectedDone = Array($names.length).fill(true);
</script>

<form>
	<div class="row">
		<div class="three columns">
			<b>Namen</b>
		</div>
		<div class="three columns">
			<b>Taken</b>
		</div>
		<div class="two columns">
			<b>Gedaan?</b>
		</div>
	</div>

	{#each $names as { name }, i}
	<div class="row">

			<div class="three columns">
				<p>{name}</p>
			</div>

			<div class="three columns">
				<select bind:value={selectedChore[i]} name="cars" id="cars">
					{#each $chores as { id, chore }, i}
						<option value={id}>{chore}</option>
					{/each}
				</select>
			</div>

			<div class="two columns">
				<YesNo bind:completed={selectedDone[i]} />
			</div>

	</div>
	{/each}
</form>

<button
  class="button button-primary active"
  on:click={() => click(false)}
>
  Voeg oud toe
</button>

<button
  class="button button-primary active"
  on:click={() => click(true)}
>
  Voeg recent toe
</button>