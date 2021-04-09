<script lang="ts">
	import { chores } from './stores.js';
</script>

<form>
	{#each  $chores as chore, i}
	<label for="chore{i}">Taak { i + 1 }</label>
	<input class="u-full-width" type="text" placeholder="Taak invullen" id="chore{i}"  bind:value="{chore}">
	{/each}


	<!-- <input class="button-primary" type="submit" value="Submit"> -->
  </form>