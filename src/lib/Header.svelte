<script lang="ts">
	import { page } from '$app/stores';

	import {
		absence,
		names,
		nrPresent,
		currentMatching,
		archiveWeeks,
		// activeChores,
		chores
	} from '../stores';
	import { matchAndUpdate } from '../matching';
	import { goto } from '$app/navigation';

	function randomizeChoresClick() {
		console.log("Tried matching");
		let match = matchAndUpdate(
			false,
			currentMatching,
			archiveWeeks,
			chores,
			names,
			absence,
			// activeChores
		);
		currentMatching.set(match);
		goto('/');
	}
	$: isAdmin = $page.path === '/admin'
</script>

<header>
	<nav>
		<ul>
			<li>
				<a sveltekit:prefetch href="/"
					><button class:active={$page.path === '/'} class="button button-primary"
						>Huidige huistaken</button
					></a
				>
			</li>
			{#if isAdmin}
			<li>
				<a sveltekit:prefetch href="/change-names"
					><button class:active={$page.path === '/change-names'} class="button button-primary"
						>Namen veranderen</button
					></a
				>
			</li>
			<li>
				<a sveltekit:prefetch href="/change-chores"
					><button class:active={$page.path === '/change-chores'} class="button button-primary"
						>Taken veranderen</button
					></a
				>
			</li>
			{/if}

			<li>
				<a sveltekit:prefetch href="/check-chore-completion"
					><button
						class:active={$page.path === '/check-chore-completion'}
						class="button button-primary">Nieuwe huistaken</button
					></a
				>
			</li>
			{#if isAdmin}
			<li>
				<a sveltekit:prefetch href="/">
					<button class="button button-primary" on:click={randomizeChoresClick}
						>Randomize huistaken</button
					></a
				>
			</li>
			<li>
				<a sveltekit:prefetch href="/add-history"
					><button class:active={$page.path === '/add-history'} class="button button-primary"
						>Geschiedenis toevoegen</button
					></a
				>
			</li>
			<li>
				<a sveltekit:prefetch href="/change-current-chores"
					><button
						class:active={$page.path === '/change-current-chores'}
						class="button button-primary">Huidige huistaken veranderen</button
					></a
				>
			</li>
			{/if}
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}


	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	button.active {
		background-color: darkcyan;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 2em 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 10%;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
