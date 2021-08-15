<script lang="ts">
	import { chores } from "../stores";

	export const location = null;
</script>

<form>
	{#each $chores as { id, chore }, i}
		<label for="chore{i}">Taak {i + 1}</label>
		<input
			class="u-full-width"
			type="text"
			placeholder="Taak invullen"
			id="chore{i}"
			bind:value={chore}
		/>
	{/each}
</form>
