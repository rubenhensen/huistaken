<script lang="ts">
  import YesNo from './YesNo.svelte'
	import { matching } from './stores.js';
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
    {#each $matching as {name, chore, completed} , i}
      <tr>
        <td>{name}</td>
        <td>{chore}</td>
        <td><YesNo bind:completed={completed}/></td>        
      </tr>
    {/each}
    </tbody>
  </table>


  <style>
  </style>