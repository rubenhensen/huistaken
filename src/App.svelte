<script lang="ts">
	import Chores from './Chores.svelte';
	import NewChores from './NewChores.svelte';
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
      	<div class="one-half column" style="margin-top: 25%">
		  
			<h1>Huistaken generator 2000</h1>
			<button class="button button-primary active" 
				on:click="{() => changePage("Chores")}"
				class:selected="{page === 'Chores'}">
				Huidige huistaken
			</button>

			<button class="button button-primary" 
				on:click="{() => changePage("NewChores")}"
				class:selected="{page === 'NewChores'}">
				Nieuwe huistaken
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

			{#if page == "NewChores"}
			<NewChores />
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

	/* main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	} */

</style>