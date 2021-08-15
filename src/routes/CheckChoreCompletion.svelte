<script lang="ts">
  import { absence, currentMatching, names, chores, showNav } from "../stores";
  import YesNo from "../components/YesNo.svelte";

  import findMatching from "randomized-hopcroft-karp";
  import { Gender } from "../types/personDefinition";
  export const location = null;
  import { link } from "svelte-routing";

  import { navigate } from "svelte-routing";

  function click() {
    $showNav = false;
    navigate("/absence");
  }
</script>

<!-- <a href="/"><Fa icon={faAngleDoubleLeft} /></a> 27 mei <a href="/"><Fa icon={faAngleDoubleRight} /></a> -->
<table class="u-full-width">
  <thead>
    <tr>
      <th>Naam</th>
      <th>Taak</th>
      <th>Gedaan?</th>
    </tr>
  </thead>
  <tbody>
    {#each $currentMatching as { personId, choreId, completed }, i}
      <tr>
        <td>{$names.find((x) => x.id === personId).name}</td>
        <td>{$chores.find((x) => x.id === choreId).chore}</td>
        <td><YesNo bind:completed /></td>
      </tr>
    {/each}
  </tbody>
</table>

<button class="button button-primary active" on:click={click}> Volgende </button>
