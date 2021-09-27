import type { Writable } from 'svelte/store';
import { get } from 'svelte/store';
import findMatching from 'randomized-hopcroft-karp';

import type { Matching } from './types/matchingDefinition';
import type { Chore } from './types/choreDefinition';
import type { Person } from './types/personDefinition';
import type { Absence } from './types/absenceDefinition';
import type { ActiveChores } from './types/activeChoresDefinition';
import { Gender } from './types/personDefinition';

export function matchAndUpdate(
	addHistory: Boolean,
	currentMatching: Writable<Matching[]>,
	archiveWeeks: Writable<Matching[][]>,
	chores: Writable<Chore[]>,
	names: Writable<Person[]>,
	absence: Writable<Absence[]>,
	activeChores: Writable<ActiveChores[]>
): Matching[] {
	// TODO: show error message is tasks and names don't match in size
	let archiveWeeksValue: Matching[][];
	archiveWeeks.subscribe((value) => {
		archiveWeeksValue = value;
	});

	const currentMatchingValue: Matching[] = get(currentMatching);
	const choresValue: Chore[] = get(chores);
	const namesValue: Person[] = get(names);
	const activeChoreValue: ActiveChores[] = get(activeChores);
	const absenceValue: Absence[] = get(absence);

	if (addHistory) {
		archiveWeeks.update((arr) => [...arr, currentMatchingValue]);
	}


	return match(archiveWeeksValue, choresValue, namesValue, absenceValue, activeChoreValue);
}

export function match(
	archiveWeeks: Matching[][],
	chores: Chore[],
	names: Person[],
	absence: Absence[],
	activeChores: ActiveChores[]
): Matching[] {
	// TODO: show error message is tasks and names don't match in size

	const PREVIOUS_WEEKS_CHECKED = 10;
	const CHORES_SIZE = 11;
	const NAMES_SIZE = 10;

	const MATCH_SIZE = activeChores.filter((n) => n.activeChore).length;
	const ABSENT_IDS = absence.filter((n) => !n.present).map((n) => n.personId);
	const INACTIVE_CHORES_IDS = activeChores.filter((n) => !n.activeChore).map((n) => n.choreId);


	let lowestIndex: number;
	archiveWeeks.length < PREVIOUS_WEEKS_CHECKED
		? (lowestIndex = 0)
		: (lowestIndex = archiveWeeks.length - PREVIOUS_WEEKS_CHECKED);

	// Loop through last 10 weeks
	// Create graph
	// Create edges
	// Check if matching is possible
	// is possible: return matching
	// not possible: Add 10th, then 9th, 8th week
	let edges = [];
	let matching = [];
	let graph = new Array(NAMES_SIZE);
	for (let currentArchiveWeek = lowestIndex; currentArchiveWeek < archiveWeeks.length; currentArchiveWeek++) {
		// Create matching double array full true booleans except no task
		graph = new Array(NAMES_SIZE);
		let b = new Array(CHORES_SIZE);
		for (let currentArchiveWeek = 0; currentArchiveWeek < NAMES_SIZE; currentArchiveWeek++) {
			b = new Array(CHORES_SIZE);
			for (let j = 0; j < CHORES_SIZE; j++) {
				if (j == 10) {
					b[j] = false;
				} else {
					b[j] = true;
				}
			}
			graph[currentArchiveWeek] = b;
		}

		// Loop through archive last 10 weeks or max
		// Remove all previously completed tasks
		for (let i = currentArchiveWeek; i < archiveWeeks.length; i++) {
			for (let j = 0; j < archiveWeeks[i].length; j++) {
				if (archiveWeeks[i][j].completed) {
					const personNode = archiveWeeks[i][j].personId;
					const choreNode = archiveWeeks[i][j].choreId;
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
					const personId = archiveWeeks.slice(-1)[0][i].personId;
					const choreId = archiveWeeks.slice(-1)[0][i].choreId;
					for (let j = 0; j < CHORES_SIZE; j++) {
						graph[personId][j] = false;
					}
					graph[personId][choreId] = true;
				}
			}
		}

		// Remove inactive chores from being matched
		INACTIVE_CHORES_IDS.forEach((id) => {
			for (let i = 0; i < NAMES_SIZE; i++) {
				graph[i][id] = false;
			}
		});

		// Remove inactive people from being matched
		ABSENT_IDS.forEach((id) => {
			for (let i = 0; i < CHORES_SIZE; i++) {
				graph[id][i] = false;
			}
		});

		// Put all edges in an array
		edges = [];
		for (let k = 0; k < NAMES_SIZE; k++) {
			for (let m = 0; m < CHORES_SIZE; m++) {
				if (graph[k][m]) {
					edges.push([k, m]);
				}
			}
		}

		// Try to find matching
		matching = findMatching(NAMES_SIZE, CHORES_SIZE, edges);

		// If matching found, then stop
		if (matching.length >= MATCH_SIZE) {
			break;
		}
	}
	const newMatching = [];
	console.log(matching);
	matching.forEach((match) => {
		newMatching.push({
			personId: match[0],
			choreId: match[1],
			completed: false
		});
	});

	for (let i = 0; i < NAMES_SIZE; i++) {
		if (!newMatching.find((n) => n.personId == i)) {
			newMatching.push({
				personId: i,
				choreId: 10,
				completed: false
			});
		}
	}

	newMatching.sort(function (a, b) {
		return a.personId - b.personId || a.choreId - b.choreId;
	});

	return newMatching;
}
