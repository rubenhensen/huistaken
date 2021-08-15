<script lang="ts">
  import { activeChores, nrPresent, chores, showNav } from "../stores";
  import YesNo from "../components/YesNo.svelte";
  import findMatching from "randomized-hopcroft-karp";
  import { Gender } from "../types/personDefinition";
  export const location = null;
  import { navigate } from "svelte-routing";
  import { match } from "../matching"

  $: isDisabled =
    $activeChores.filter((n) => n.activeChore).length !== $nrPresent;

  $showNav = false;

  function click() {
    // Write matching function with subset of chores and names

    navigate('/')
  }
</script>

<!-- <a href="/"><Fa icon={faAngleDoubleLeft} /></a> 27 mei <a href="/"><Fa icon={faAngleDoubleRight} /></a> -->
<table class="u-full-width">
  <thead>
    <tr>
      <th>Naam</th>
      <th>Thuis?</th>
    </tr>
  </thead>
  <tbody>
    {#each $activeChores as { choreId, activeChore }, i}
      <tr>
        <td>{$chores.find((x) => x.id === choreId).chore}</td>
        <td><YesNo bind:completed={activeChore} /></td>
      </tr>
    {/each}
  </tbody>
</table>

<button
  class="button button-primary active"
  on:click={click}
  disabled={isDisabled}
>
  Volgende
</button>

<style>
  button:disabled,
  button[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }

  button[disabled]:hover {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
</style>
