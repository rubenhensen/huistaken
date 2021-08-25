<script lang="ts">
  import { currentMatching, chores, names } from "../stores";
  export const location = null;
</script>

<!-- <a href="/"><Fa icon={faAngleDoubleLeft} /></a> 27 mei <a href="/"><Fa icon={faAngleDoubleRight} /></a> -->
<table class="u-full-width">
  <thead>
    <tr>
      <th>Naam</th>
      <th>Huistaak</th>
    </tr>
  </thead>
  <tbody>
    {#each $currentMatching as { personId, choreId, completed }, i}
      <tr>
        <td>{$names.find((x) => x.id === personId).name}</td>
        <td>{$chores.find((x) => x.id === choreId).chore}</td>
      </tr>
    {/each}
  </tbody>
</table>

