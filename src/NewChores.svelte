<script lang="ts">
  import YesNo from "./YesNo.svelte";
  import { currentMatching } from "./stores";

  function createNewChores() {
    alert("test");
  }
</script>

<table class="u-full-width">
  <thead>
    <tr>
      <th>Naam</th>
      <th>Huistaak</th>
      <th>Gedaan?</th>
    </tr>
  </thead>
  <tbody>
    {#each $currentMatching as { name, chore, completed }, i}
      <tr>
        <td>{name}</td>
        <td>{chore}</td>
        <td><YesNo bind:completed /></td>
      </tr>
    {/each}
  </tbody>
</table>
<button class="button button-primary" on:click={createNewChores}
  >Bevestig</button
>

<style>
</style>
