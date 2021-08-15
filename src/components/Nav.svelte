<script lang="ts">
	import { link } from "svelte-routing";
</script>

<div class="container">
	<div class="row">
		<div class="ten columns">
			<nav>
				<a href="/" use:link><button class="button button-primary active">
					Huidige huistaken
				</button></a>
				<a href="names" use:link><button class="button button-primary active">
					Namen veranderen
				</button></a>
				<a href="change-chores" use:link><button class="button button-primary active">
					Taken veranderen
				</button></a>
				<a href="completion" use:link><button class="button button-primary active">
					Nieuwe huistaken
				</button></a>
			</nav>
		</div>
	</div>
</div>

<style>
</style>
