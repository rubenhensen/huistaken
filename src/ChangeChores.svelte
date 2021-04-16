<script lang="ts">
	import { chores } from "./stores";
</script>

<form>
	{#each $chores as { id, name }, i}
		<label for="chore{i}">Taak {i + 1}</label>
		<input
			class="u-full-width"
			type="text"
			placeholder="Taak invullen"
			id="chore{i}"
			bind:value={name}
		/>
	{/each}
</form>
