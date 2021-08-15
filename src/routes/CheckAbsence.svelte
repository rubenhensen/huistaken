<script lang="ts">
  import { absence, names, nrPresent, currentMatching, archiveWeeks, activeChores, chores } from "../stores";
  import YesNo from "../components/YesNo.svelte";
  export const location = null;
  import { navigate } from "svelte-routing";
  import { matchAndUpdate} from "../matching"

  function click() {
    // Check number of absences
    $nrPresent = $absence.filter(n => n.present).length;
    if ($nrPresent < 10) {
      navigate("/choose-chores", {replace: false});
    } else {
      $activeChores.forEach(n => n.activeChore = true);
      let match = matchAndUpdate(currentMatching, archiveWeeks, chores, names, absence, activeChores);
      currentMatching.set(match);
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
