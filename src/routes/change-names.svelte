<script lang="ts">
	import ManWoman from '../lib/ManWoman.svelte';
	import { names } from '../stores';
	export const location = null;
</script>

<form>
	<div class="row">
		<div class="six columns">
			<b>Namen</b>
		</div>
		<div class="two columns" style="padding: 1em">
			<b>Geslacht</b>
		</div>
	</div>
	{#each $names as { name, gender }, i}
		<div class="row">
			<div class="six columns">
				<label for="name{i}">Naam {i + 1}</label>
				<input
					class="u-full-width"
					type="text"
					placeholder="Naam invullen"
					id="name{i}"
					bind:value={name}
				/>
			</div>
			<div class="two columns" style="padding: 1em">
				<ManWoman bind:gender />
			</div>
		</div>
	{/each}
</form>
