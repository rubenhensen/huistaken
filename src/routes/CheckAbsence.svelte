<script lang="ts">
  import { absence, names, nrPresent } from "../stores";
  import YesNo from "../components/YesNo.svelte";
  import findMatching from "randomized-hopcroft-karp";
  import { Gender } from "../types/personDefinition";
  export const location = null;
  import { navigate } from "svelte-routing";

  import { showNav } from "../stores";

  $showNav = false;

  function click() {
// Check number of absences
    $nrPresent = $absence.filter(n => n.present).length;
    if ($nrPresent < 10) {
      navigate("/choose-chores");
    } else {
      $showNav = true;
      navigate("/")
    }
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
    {#each $absence as { personId, present }, i}
      <tr>
        <td>{$names.find((x) => x.id === personId).name}</td>
        <td><YesNo bind:completed={present} /></td>
      </tr>
    {/each}
  </tbody>
</table>

<button class="button button-primary active" on:click={click}>
  Volgende
</button>
