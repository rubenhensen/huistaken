<script lang="ts">
	import { chores } from '../stores';
	import ManWoman from '../lib/ManWoman.svelte';

	export const location = null;
</script>

<form>
	<div class="row">
		<div class="six columns">
			<b>Taken</b>
		</div>
		<div class="two columns" style="padding: 1em">
			<b>Geslacht</b>
		</div>
	</div>
	{#each $chores as { chore, gender }, i}
		<div class="row">
			<div class="six columns">
				<label for="name{i}">Naam {i + 1}</label>
				<input
					class="u-full-width"
					type="text"
					placeholder="Naam invullen"
					id="name{i}"
					bind:value={chore}
				/>
			</div>
			<div class="two columns" style="padding: 1em">
				<ManWoman bind:gender />
			</div>
		</div>
	{/each}
</form>
