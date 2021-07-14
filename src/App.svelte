<script lang="ts">
	import Chores from './CurrentChores.svelte';
	import ChangeNames from './ChangeNames.svelte';
	import ChangeChores from './ChangeChores.svelte';
	

	let page = 'Chores';
	function changePage(newPage: string) {
		page = newPage;
	}
</script>

<main>
  <div class="container">
    <div class="row">
      	<div class="ten columns">
		  
			<h1>Huistaken generator 2000</h1>
			<button class="button button-primary active" 
				on:click="{() => changePage("Chores")}"
				class:selected="{page === 'Chores'}">
				Huidige huistaken
			</button>

			<button class="button button-primary" 
				on:click="{() => changePage("ChangeNames")}"
				class:selected="{page === 'ChangeNames'}">
				Namen veranderen
			</button>

			<button class="button button-primary" 
				on:click="{() => changePage("ChangeChores")}"
				class:selected="{page === 'ChangeChores'}">
				Taken veranderen
			</button>
			<br/>

			{#if page == "Chores"}
			<Chores />
			{/if}

			{#if page == "ChangeNames"}
			<ChangeNames />
			{/if}

			{#if page == "ChangeChores"}
			<ChangeChores />
			{/if}


		</div>
    </div>
  </div>
</main>

<style>
</style>