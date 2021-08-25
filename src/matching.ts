import { currentMatching, chores, names, archiveWeeks } from "./stores";
import type { Writable } from "svelte/store";
import { get } from "svelte/store";
import findMatching from "randomized-hopcroft-karp";

import type { Matching } from "./types/matchingDefinition";
import type { Chore } from "./types/choreDefinition";
import type { Person } from "./types/personDefinition";
import type { Absence } from "./types/absenceDefinition";
import type { ActiveChores } from "./types/activeChoresDefinition";
import { Gender } from "./types/personDefinition";

export function matchAndUpdate(currentMatching: Writable<Matching[]>,
    archiveWeeks: Writable<Matching[][]>,
    chores: Writable<Chore[]>,
    names: Writable<Person[]>,
    absence: Writable<Absence[]>,
    activeChores: Writable<ActiveChores[]>): any[] {


    // TODO: show error message is tasks and names don't match in size
    let archiveWeeksValue: Matching[][];
	archiveWeeks.subscribe(value => {
		archiveWeeksValue = value;
	});

    let currentMatchingValue: Matching[] = get(currentMatching);
    let choresValue: Chore[] = get(chores);
    let namesValue: Person[] = get(names);
    let activeChoreValue: ActiveChores[] = get(activeChores);
    let absenceValue: Absence[] = get(absence);

    archiveWeeks.update((arr) => [...arr, currentMatchingValue]);

    return match(archiveWeeksValue, choresValue, namesValue, absenceValue, activeChoreValue);
}

export function match(
    archiveWeeks: Matching[][],
    chores: Chore[],
    names: Person[],
    absence: Absence[],
    activeChores: ActiveChores[]): any[] {
    // TODO: show error message is tasks and names don't match in size

    const PREVIOUS_WEEKS_CHECKED = 10;
    const CHORES_SIZE = 11;
    const NAMES_SIZE = 10;

    const MATCH_SIZE = activeChores.filter(n => n.activeChore).length;
    const ABSENT_IDS = absence.filter(n => !n.present).map(n => n.personId);
    const INACTIVE_CHORES_IDS = activeChores.filter(n => !n.activeChore).map(n => n.choreId);
    // Create matching double array full true booleans except no task
    let graph = new Array(NAMES_SIZE);
    let b = new Array(CHORES_SIZE);
    for (let i = 0; i < NAMES_SIZE; i++) {
        b = new Array(CHORES_SIZE);
        for (let j = 0; j < CHORES_SIZE; j++) {
            if (j == 10) {
                b[j] = false;
            } else {
                b[j] = true;
            }
        }
        graph[i] = b;
    }

    let lowestIndex: number;
    archiveWeeks.length < PREVIOUS_WEEKS_CHECKED
        ? (lowestIndex = 0)
        : (lowestIndex = archiveWeeks.length - PREVIOUS_WEEKS_CHECKED);

    // Loop through archive last 10 weeks or max
    // Remove all previously completed tasks
    for (let i = lowestIndex; i < archiveWeeks.length; i++) {
        for (let j = 0; j < archiveWeeks[i].length; j++) {
            if (archiveWeeks[i][j].completed) {
                let personNode = archiveWeeks[i][j].personId;
                let choreNode = archiveWeeks[i][j].choreId;
                graph[personNode][choreNode] = false;
            }
        }
    }

    // Remove man chores from women and vica versa.
    for (let k = 0; k < CHORES_SIZE; k++) {
        // Remove men from women chores
        if (chores[k].gender == Gender.Female) {
            for (let m = 0; m < NAMES_SIZE; m++) {
                if (names[m].gender == Gender.Male) {
                    graph[m][k] = false;
                }
            }
        }

        // Remove women from men chores
        if (chores[k].gender == Gender.Male) {
            for (let m = 0; m < NAMES_SIZE; m++) {
                if (names[m].gender == Gender.Female) {
                    graph[m][k] = false;
                }
            }
        }
    }

    // If chore not done, make it their only option
    for (let i = 0; i < NAMES_SIZE; i++) {
        if (archiveWeeks.length != 0) {
            if (!archiveWeeks.slice(-1)[0][i].completed) {
                let personId = archiveWeeks.slice(-1)[0][i].personId;
                let choreId = archiveWeeks.slice(-1)[0][i].choreId;
                for (let j = 0; j < CHORES_SIZE; j++) {
                    graph[personId][j] = false;
                }
                graph[personId][choreId] = true;
            }
        }
    }

    // Remove inactive chores from being matched
    INACTIVE_CHORES_IDS.forEach(id => {
        for (let i = 0; i < NAMES_SIZE; i++) {
            graph[i][id] = false;
        }
    });

    // Remove inactive people from being matched
    ABSENT_IDS.forEach(id => {
        for (let i = 0; i < CHORES_SIZE; i++) {
            graph[id][i] = false;
        }
    });

    // Loop through last 10 weeks
    // Check if matching is possible
    // is possible: return matching
    // not possible: Add 10th, then 9th, 8th week
    let edges = [];
    let matching = [];
    for (let i = lowestIndex; i < archiveWeeks.length; i++) {
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
        if (matching.length >= MATCH_SIZE) {
            break;
        }

        // Matching not found, re-add week 10, then 9, then 8...
        for (let j = 0; j < archiveWeeks[i].length; j++) {
            let personNode = archiveWeeks[i][j].personId;
            let choreNode = archiveWeeks[i][j].choreId;

            // Don't add options if: they didn't do their chore
            if (!archiveWeeks.slice(-1)[0][personNode].completed) {
                break;
            }

            // it is the 'no task'-task
            if (choreNode == 10) {
                break;
            }

            // it is an absent person
            if (ABSENT_IDS.includes(personNode)) {
                break;
            }

            // if it is an inactive task
            if (INACTIVE_CHORES_IDS.includes(choreNode)) {
                break;
            }
            graph[personNode][choreNode] = true;
        }
    }
    let newMatching = [];
    console.log(matching)
    matching.forEach((match) => {
        newMatching.push({
            personId: match[0],
            choreId: match[1],
            completed: false,
        });
    });

    for (let i = 0; i < NAMES_SIZE; i++) {
        if (!newMatching.find(n => n.personId == i)) {
            newMatching.push({
                personId: i,
                choreId: 10,
                completed: false,
            });
        }
    }

    newMatching.sort(function(a, b) { 
        return a.personId - b.personId  ||  a.choreId - b.choreId;
      });

    return newMatching;
}
