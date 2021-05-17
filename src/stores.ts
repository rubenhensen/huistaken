import { writable } from 'svelte-local-storage-store'
import type { Person } from './personDefinition'
import { Gender } from './personDefinition'
import type { Chore } from './choreDefinition'
import type { Matching } from './matchingDefinition'

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
    { personId: 0, choreId: 0, completed: true },
    { personId: 1, choreId: 1, completed: true },
    { personId: 2, choreId: 2, completed: true },
    { personId: 3, choreId: 3, completed: true },
    { personId: 4, choreId: 4, completed: true },
    { personId: 5, choreId: 5, completed: true },
    { personId: 6, choreId: 6, completed: true },
    { personId: 7, choreId: 7, completed: true },
    { personId: 8, choreId: 8, completed: true },
    { personId: 9, choreId: 9, completed: true },])

export const archiveWeeks = writable<Matching[][]>('archiveWeeks', [])

