<script lang="ts">
	import { faFemale, faMale } from '@fortawesome/free-solid-svg-icons'
	import ManWoman from "./ManWoman.svelte";
	import { names } from "./stores";
</script>

<form>
	{#each $names as { name, gender }, i}
		<div class="row">
			<div class="eight columns">
				<label for="name{i}">Naam {i + 1}</label>
				<input
					class="u-full-width"
					type="text"
					placeholder="Naam invullen"
					id="name{i}"
					bind:value={name}
				/>
			</div>
			<div class="four columns" style="padding: 1em">
				<!-- <IconChoice 
					bind:choice="{gender}"
					firstChoice="male"
					secondChoice="female"
					firstIcon="{faMale}"
					secondIcon="{faFemale}"
					firstColor="blue"
					secondColor="hotpink"
					firstOpacity="{0.1}"
					secondOpacity="{0.1}" /> -->
				<ManWoman bind:gender />
			</div>
		</div>
	{/each}

	<!-- <input class="button-primary" type="submit" value="Submit"> -->
</form>
