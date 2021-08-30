<script lang="ts">
	import { page } from '$app/stores';
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
			<li>
				<a sveltekit:prefetch href="/check-chore-completion"
					><button
						class:active={$page.path === '/check-chore-completion'}
						class="button button-primary">Nieuwe huistaken</button
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
					><button class:active={$page.path === '/change-current-chores'} class="button button-primary"
						>Huidige huistaken veranderen</button
					></a
				>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
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
