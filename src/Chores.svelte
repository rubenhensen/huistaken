<script lang="ts">
	import { currentMatching, chores, names } from './stores';
  import YesNo from "./YesNo.svelte";
  // import findMatching from 'bipartite-matching';
  // import { v4 as uuidv4 } from 'uuid';
  function createNewChores() : void {
    // console.log(uuidv4());
    localStorage.setItem('myCat', 'Tom');
    // findMatching()
  }
</script>


<!-- <a href="/"><Fa icon={faAngleDoubleLeft} /></a> 27 mei <a href="/"><Fa icon={faAngleDoubleRight} /></a> -->
<table class="u-full-width">
    <thead>
      <tr>
        <th>Naam</th>
        <th>Huistaak</th>
        <th>Gedaan?</th>
      </tr>
    </thead>
    <tbody>
    {#each $currentMatching as {personId, choreId, completed} , i}
      <tr>
        <td>{$names.find(x => x.id === personId).name}</td>
        <td>{$chores.find(x => x.id === choreId).chore}</td>
        <td><YesNo bind:completed /></td>
      </tr>
    {/each}
    </tbody>
  </table>
  <button class="button button-primary" 
  on:click="{createNewChores}">
  Nieuwe huistaken
</button>