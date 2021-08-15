<script lang="ts">
	import Nav from "./components/Nav.svelte";
	import { showNav } from "./stores";

	import { Router, Link, Route, navigate } from "svelte-routing";
	import CurrentChores from "./routes/CurrentChores.svelte";
	import ChangeChores from "./routes/ChangeChores.svelte";
	import ChangeNames from "./routes/ChangeNames.svelte";
	import CheckAbsence from "./routes/CheckAbsence.svelte";
	import CheckChoreCompletion from "./routes/CheckChoreCompletion.svelte";
	import ChooseChores from "./routes/ChooseChores.svelte";

	export let url = "";
</script>

<main>
	<Router {url}>
		{#if $showNav}
			<Nav />
		{/if}
		<div class="container">
			<div class="row">
				<div class="ten columns">
					<h1>Huistaken generator 2000</h1>
					<Route path="choose-chores" component={ChooseChores} />
					<Route path="completion" component={CheckChoreCompletion} />
					<Route path="absence" component={CheckAbsence} />
					<Route path="names" component={ChangeNames} />
					<Route path="change-chores" component={ChangeChores} />
					<Route path="/"><CurrentChores /></Route>
				</div>
			</div>
		</div>
	</Router>
</main>

<style>
</style>
