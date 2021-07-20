<script lang="ts">
  import { currentMatching, chores, names, archiveWeeks } from "./stores";
  import YesNo from "./YesNo.svelte";
  import findMatching from "randomized-hopcroft-karp";
  import { Gender } from "./types/personDefinition";

  function createNewChores(): void {
    // TODO: show error message is tasks and names don't match in size

    const PREVIOUS_WEEKS_CHECKED = 10;
    const CHORES_SIZE = 10;
    const NAMES_SIZE = 10;
    archiveWeeks.update((arr) => [...arr, $currentMatching]);
    $archiveWeeks.forEach((week) => {});

    // Create full matching double array
    // let graph = new Array(10).fill(new Array(10).fill(true));

    let graph = new Array(NAMES_SIZE);
    let b = new Array(CHORES_SIZE);
    for (let i = 0; i < NAMES_SIZE; i++) {
      b = new Array(CHORES_SIZE);
      for (let j = 0; j < CHORES_SIZE; j++) {
        b[j] = true;
      }
      graph[i] = b;
    }

    let lowestIndex: number;
    $archiveWeeks.length < PREVIOUS_WEEKS_CHECKED
      ? (lowestIndex = 0)
      : (lowestIndex = $archiveWeeks.length - PREVIOUS_WEEKS_CHECKED);

    // Loop through archive last 10 weeks or max
    // Remove all previously completed tasks
    for (let i = lowestIndex; i < $archiveWeeks.length; i++) {
      for (let j = 0; j < $archiveWeeks[i].length; j++) {
        if ($archiveWeeks[i][j].completed) {
          let personNode = $archiveWeeks[i][j].personId;
          let choreNode = $archiveWeeks[i][j].choreId;
          graph[personNode][choreNode] = false;
        }
      }
    }

    // Remove man chores from women and vica versa.
    for (let k = 0; k < CHORES_SIZE; k++) {
      // Remove men from women chores
      if ($chores[k].gender == Gender.Female) {
        for (let m = 0; m < NAMES_SIZE; m++) {
          if ($names[m].gender == Gender.Male) {
            graph[m][k] = false;
          }
        }
      }

      // Remove women from men chores
      if ($chores[k].gender == Gender.Male) {
        for (let m = 0; m < NAMES_SIZE; m++) {
          if ($names[m].gender == Gender.Female) {
            graph[m][k] = false;
          }
        }
      }
    }

    // If chore not done, make it their only option
    for (let i = 0; i < NAMES_SIZE; i++) {
      if (!$archiveWeeks.slice(-1)[0][i].completed) {
        let personId = $archiveWeeks.slice(-1)[0][i].personId;
        let choreId = $archiveWeeks.slice(-1)[0][i].choreId;
        for (let j = 0; j < CHORES_SIZE; j++) {
          graph[personId][j] = false;
        }
        graph[personId][choreId] = true;
      }
    }

    // Loop through last 10 weeks
    // Check if matching is possible
    // is possible: return matching
    // not possible: Add 10th, then 9th, 8th week
    let edges = [];
    let matching = [];
    for (let i = lowestIndex; i < $archiveWeeks.length; i++) {
      // Put all edges in an array
      edges = [];
      for (let k = 0; k < 10; k++) {
        for (let m = 0; m < 10; m++) {
          if (graph[k][m]) {
            edges.push([k, m]);
          }
        }
      }

      // Try to find matching
      matching = findMatching(10, 10, edges);

      // If matching found, then stop
      if (matching.length >= 10) {
        break;
      }

      // Matching not found, re-add week 10, then 9, then 8...
      for (let j = 0; j < PREVIOUS_WEEKS_CHECKED; j++) {
        let personNode = $archiveWeeks[i][j].personId;
        let choreNode = $archiveWeeks[i][j].choreId;

        // Don't add options if they didn't do their chore
        if ($archiveWeeks.slice(-1)[0][personNode].completed) {
          graph[personNode][choreNode] = true;
        }
      }
    }
    let newMatching = [];

    matching.forEach((match) => {
      newMatching.push({
        personId: match[0],
        choreId: match[1],
        completed: false,
      });
    });

    currentMatching.set(newMatching);
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
    {#each $currentMatching as { personId, choreId, completed }, i}
      <tr>
        <td>{$names.find((x) => x.id === personId).name}</td>
        <td>{$chores.find((x) => x.id === choreId).chore}</td>
        <td><YesNo bind:completed /></td>
      </tr>
    {/each}
  </tbody>
</table>
<button class="button button-primary" on:click={createNewChores}>
  Nieuwe huistaken
</button>
