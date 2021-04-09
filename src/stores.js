import { writable } from 'svelte-local-storage-store'

export const names = writable('names', [
    {name: "Ruben", gender: "male"}, 
    {name: "Anouk", gender: "female"},
    {name: "Mathijs", gender: "male"},
    {name: "Kim", gender: "female"},
    {name: "Thomas", gender: "male"},
    {name: "Anna", gender: "female"},
    {name: "Jette", gender: "female"},
    {name: "Manon", gender: "female"},
    {name: "Thomas2", gender: "male"},
    {name: "Melki", gender: "male"},])

export const chores = writable('chores', [
    "Keuken", 
    "Keuken", 
    "Woonkamer", 
    "Woonkamer", 
    "Gang", 
    "Apparaten en washok", 
    "Oud papier en glas", 
    "Oud papier en glas", 
    "WC/Douche jongens", 
    "WC/Douche meisjes"])

export const matching = writable('matching', [
    {name: "Ruben", chore: "Keuken", completed: false}, 
    {name: "Anouk", chore: "Keuken", completed: false},
    {name: "Mathijs", chore: "Woonkamer", completed: false},
    {name: "Kim", chore: "Woonkamer", completed: false},
    {name: "Thomas", chore: "Gang", completed: false},
    {name: "Anna", chore: "Apparaten en washok", completed: false},
    {name: "Jette", chore: "Oud papier en glas", completed: false},
    {name: "Manon", chore: "Oud papier en glas", completed: false},
    {name: "Thomas2", chore: "WC/Douche jongens", completed: false},
    {name: "Melki", chore: "WC/Douche meisjes", completed: false},])

    