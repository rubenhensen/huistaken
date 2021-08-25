<script lang="ts">
	import Nav from "./components/Nav.svelte";

	import { Router, Link, Route, navigate } from "svelte-routing";
	import CurrentChores from "./routes/CurrentChores.svelte";
	import ChangeChores from "./routes/ChangeChores.svelte";
	import ChangeNames from "./routes/ChangeNames.svelte";
	import CheckAbsence from "./routes/CheckAbsence.svelte";
	import CheckChoreCompletion from "./routes/CheckChoreCompletion.svelte";
	import ChooseChores from "./routes/ChooseChores.svelte";
	import AddHistory from "./routes/AddHistory.svelte";
	export let url = "";
</script>

<main>
	<Router {url}>
		<div class="container">
			<div class="row">
				<h1>Huistaken generator 2000</h1>
				<Nav />
				<Route path="choose-chores" component={ChooseChores} />
				<Route path="completion" component={CheckChoreCompletion} />
				<Route path="absence" component={CheckAbsence} />
				<Route path="names" component={ChangeNames} />
				<Route path="change-chores" component={ChangeChores} />
				<Route path="add-history" component={AddHistory} />
				<Route path="/"><CurrentChores /></Route>
			</div>
		</div>
	</Router>
</main>

<style>
</style>
