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
): Matching[] {
	// TODO: show error message is tasks and names don't match in size
	let archiveWeeksValue: Matching[][];
	archiveWeeks.subscribe((value) => {
		archiveWeeksValue = value;
	});

	const currentMatchingValue: Matching[] = get(currentMatching);
	const choresValue: Chore[] = get(chores);
	const namesValue: Person[] = get(names);
	const absenceValue: Absence[] = get(absence);

	if (addHistory) {
		archiveWeeks.update((arr) => [...arr, currentMatchingValue]);
	}


	return match(archiveWeeksValue, choresValue, namesValue, absenceValue);
}

export function match(
	archiveWeeks: Matching[][],
	chores: Chore[],
	names: Person[],
	absence: Absence[],
): Matching[] {
	// TODO: show error message is tasks and names don't match in size

	const PREVIOUS_WEEKS_CHECKED = 10;
	const CHORES_SIZE = chores.length;
	const NAMES_SIZE = names.length;

	const MATCH_SIZE = NAMES_SIZE;
	const ABSENT_IDS = absence.filter((n) => !n.present).map((n) => n.personId);


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
	let transformation = [];
	let nrAbsences = absence.filter((person) => !person.present).length;
	for (let currentArchiveWeek = lowestIndex; currentArchiveWeek < archiveWeeks.length; currentArchiveWeek++) {
		// console.log("currentArchiveWeek: ");
		// console.log(currentArchiveWeek);

		// Create matching double array full true booleans except no task
		graph = new Array(NAMES_SIZE);
		let b = new Array(CHORES_SIZE);
		for (let currentArchiveWeek = 0; currentArchiveWeek < NAMES_SIZE; currentArchiveWeek++) {
			b = new Array(CHORES_SIZE);
			for (let j = 0; j < CHORES_SIZE; j++) {
				if (chores[j].id == 7) {
					b[j] = false;
				} else {
					b[j] = true;
				}
			}
			graph[currentArchiveWeek] = b;
		}
		// console.log("graph first step: ");
		// console.log(graph);

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

		// If not present, make no task their only option
		for (let i = 0; i < NAMES_SIZE; i++) {
			if (!absence[i].present) {
				for (let j = 0; j < CHORES_SIZE; j++) {
					graph[i][j] = false;
				}
				graph[i][7] = true;
			}
		}

		// Remove inactive chores from being matched
		// INACTIVE_CHORES_IDS.forEach((id) => {
		// 	for (let i = 0; i < NAMES_SIZE; i++) {
		// 		graph[i][id] = false;
		// 	}
		// });

		// Add double tasks to the graph
		transformation = [];
		for (let j = 0; j < CHORES_SIZE; j++) {
			if (j == 7) {
				for (let k = 1; k < nrAbsences; k++) {
					// Add extra column to graph
					let len = -1;
					graph.forEach((person: any[]) => {
						len = person.push(person[j]);
					});
					transformation.push([j, len - 1]);
				}
			} else {
				for (let k = 1; k < chores[j].amount; k++) {
					// Add extra column to graph
					let len = -1;
					graph.forEach((person: any[]) => {
						len = person.push(person[j]);
					});
					transformation.push([j, len - 1]);
				}
			}
		}

		// Put all edges in an array
		edges = [];
		for (let k = 0; k < NAMES_SIZE; k++) {
			for (let m = 0; m < graph[0].length; m++) {
				if (graph[k][m]) {
					edges.push([k, m]);
				}
			}
		}


		// console.log("archiveWeeks: ");
		// console.log(archiveWeeks);
		// console.log("chores: ");
		// console.log(chores);
		// console.log("names: ");
		// console.log(names);
		// console.log("absence: ");
		// console.log(absence);
		// console.log("graph:");
		// console.log(graph);

		// console.log("graph[0].length: " + graph[0].length);
		// console.log("matchsize: " + MATCH_SIZE);
		// Try to find matching
		matching = findMatching(NAMES_SIZE, graph[0].length, edges);

		// If matching found, then stop
		if (matching.length >= MATCH_SIZE) {
			break;
		}
	}

	const newMatching = [];
	// console.log("matching");
	// console.log(matching);
	for (let j = 0; j < matching.length; j++) {
		let [personIndex, choreIndex] = matching[j];

		if (choreIndex < CHORES_SIZE) {
			newMatching.push({
				personId: personIndex,
				choreId: choreIndex,
				completed: true
			});
		} else {
			let [c, d] = transformation.find(([a, b]) => b == choreIndex);
			newMatching.push({
				personId: personIndex,
				choreId: c,
				completed: true
			});
		}
	}

	newMatching.sort(function (a, b) {
		return a.personId - b.personId || a.choreId - b.choreId;
	});
	// console.log("new matching: ")
	// console.log(newMatching);
	return newMatching;
}

function addColumn(graph: any[], toCopy: number): number {
	let newIndex = graph[0].length;
	graph.forEach((person: any[]) => {
		person.push(person[toCopy]);
	})
	return newIndex;
}

