<script lang="ts">
	import Fa from 'svelte-fa';
	import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
	export let completed: boolean;

	function changeToCompleted() {
		completed = true;
	}

	function changeToIncomplete() {
		completed = false;
	}
</script>

<div style="display: inline;" on:click={changeToCompleted}>
	<Fa
		size="2x"
		icon={faCheck}
		primaryColor="green"
		style="padding: 0.1em; opacity: {completed ? 1 : 0.3}"
	/>
</div>

<div style="display: inline;" on:click={changeToIncomplete}>
	<Fa
		size="2x"
		icon={faTimes}
		primaryColor="red"
		style="padding: 0.1em; opacity: {!completed ? 1 : 0.3}"
	/>
</div>
