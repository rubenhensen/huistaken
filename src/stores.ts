import { writable } from 'svelte-local-storage-store'
import type { Person } from './types/personDefinition'
import { Gender } from './types/personDefinition'
import type { Chore } from './types/choreDefinition'
import type { Matching } from './types/matchingDefinition'

export const names = writable<Person[]>('names', [
    { id: 0, name: "Ruben", gender: Gender.Male},
    { id: 1, name: "Anouk", gender: Gender.Female },
    { id: 2, name: "Mathijs", gender: Gender.Male },
    { id: 3, name: "Kim", gender: Gender.Female },
    { id: 4, name: "Thomas", gender: Gender.Male },
    { id: 5, name: "Anna", gender: Gender.Female },
    { id: 6, name: "Jette", gender: Gender.Female },
    { id: 7, name: "Manon", gender: Gender.Female },
    { id: 8, name: "Thomas2", gender: Gender.Male },
    { id: 9, name: "Melki", gender: Gender.Male },])

export const chores = writable<Chore[]>('chores', [
    { id: 0, chore: "Keuken"},
    { id: 1, chore: "Keuken"},
    { id: 2, chore: "Woonkamer"},
    { id: 3, chore: "Woonkamer"},
    { id: 4, chore: "Gang"},
    { id: 5, chore: "Apparaten en washok"},
    { id: 6, chore: "Oud papier en glas"},
    { id: 7, chore: "Oud papier en glas"},
    { id: 8, chore: "WC/Douche jongens"},
    { id: 9, chore: "WC/Douche meisjes"}])

export const currentMatching = writable<Matching[]>('currentMatching',[
    { personId: 0, choreId: 0, completed: false },
    { personId: 1, choreId: 1, completed: false },
    { personId: 2, choreId: 2, completed: false },
    { personId: 3, choreId: 3, completed: false },
    { personId: 4, choreId: 4, completed: false },
    { personId: 5, choreId: 5, completed: false },
    { personId: 6, choreId: 6, completed: false },
    { personId: 7, choreId: 7, completed: false },
    { personId: 8, choreId: 8, completed: false },
    { personId: 9, choreId: 9, completed: false },])

export const archiveWeeks = writable<Matching[][]>('archiveWeeks', [])

