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
    { id: 5, name: "Melki", gender: Gender.Male },
    { id: 6, name: "Jette", gender: Gender.Female },
    { id: 7, name: "Manon", gender: Gender.Female },
    { id: 8, name: "Neve", gender: Gender.Male },
    { id: 9, name: "Anna", gender: Gender.Female },])

export const chores = writable<Chore[]>('chores', [
    { id: 0, chore: "Keuken", gender: Gender.Other},
    { id: 1, chore: "Keuken", gender: Gender.Other},
    { id: 2, chore: "Woonkamer", gender: Gender.Other},
    { id: 3, chore: "Woonkamer", gender: Gender.Other},
    { id: 4, chore: "Gang", gender: Gender.Other},
    { id: 5, chore: "Apparaten en washok", gender: Gender.Other},
    { id: 6, chore: "Oud papier en glas", gender: Gender.Other},
    { id: 7, chore: "Oud papier en glas", gender: Gender.Other},
    { id: 8, chore: "WC/Douche jongens", gender: Gender.Male},
    { id: 9, chore: "WC/Douche meisjes", gender: Gender.Female}])

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

