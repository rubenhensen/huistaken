// import { writable } from 'svelte-local-storage-store'
import { writable } from 'svelte/store'
import type { Person } from './personDefinition'
import { Gender } from './personDefinition'
import type { Chore } from './choreDefinition'

export const names = writable<Person[]>([
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

export const chores = writable<Chore[]>([
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

export const currentMatching = writable([
    { personId: "Ruben", choreId: "Keuken", completed: true },
    { personId: "Anouk", choreId: "Keuken", completed: true },
    { personId: "Mathijs", choreId: "Woonkamer", completed: true },
    { personId: "Kim", choreId: "Woonkamer", completed: true },
    { personId: "Thomas", choreId: "Gang", completed: true },
    { personId: "Anna", choreId: "Apparaten en washok", completed: true },
    { personId: "Jette", choreId: "Oud papier en glas", completed: true },
    { personId: "Manon", choreId: "Oud papier en glas", completed: true },
    { personId: "Thomas2", choreId: "WC/Douche jongens", completed: true },
    { personId: "Melki", choreId: "WC/Douche meisjes", completed: true },])

