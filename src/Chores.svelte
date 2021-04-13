<script lang="ts">
	import Fa from 'svelte-fa'
	import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
	import { matching } from './stores';
</script>


<a href="/"><Fa icon={faAngleDoubleLeft} /></a> 27 mei <a href="/"><Fa icon={faAngleDoubleRight} /></a>
<table class="u-full-width">
    <thead>
      <tr>
        <th>Naam</th>
        <th>Huistaak</th>
      </tr>
    </thead>
    <tbody>
    {#each $matching as {name, chore} , i}
      <tr>
        <td>{name}</td>
        <td>{chore}</td>
      </tr>
    {/each}
    </tbody>
  </table>