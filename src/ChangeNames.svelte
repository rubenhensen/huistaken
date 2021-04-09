<script lang="ts">
	import ManWoman from './ManWoman.svelte'
	import { names } from './stores.js';
</script>

<form>


		{#each  $names as {name, gender} , i}
		<div class="row">
		<div class="eight columns">
			<label for="name{i}">Naam { i + 1 }</label>
			<input class="u-full-width" type="text" placeholder="Naam invullen" id="name{i}"  bind:value="{name}">
		  </div>
		  <div class="four columns"style="padding: 1em">
			<ManWoman bind:gender="{gender}" />
		  </div>
		</div>
		{/each}

	<!-- <input class="button-primary" type="submit" value="Submit"> -->
  </form>