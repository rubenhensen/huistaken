// import { match } from "../matching";
// import { absence } from "../stores";
// import { Gender } from "../types/personDefinition";

// test('Returns ids 0, 1 and 2', () => {
//     let absence = [
//         { "personId": 0, "present": false },
//         { "personId": 1, "present": false },
//         { "personId": 2, "present": false },
//         { "personId": 3, "present": true },
//         { "personId": 4, "present": true },
//         { "personId": 5, "present": true },
//         { "personId": 6, "present": true },
//         { "personId": 7, "present": true },
//         { "personId": 8, "present": true },
//         { "personId": 9, "present": true }];
//     let activeChores = [
//         { "choreId": 0, "activeChore": false },
//         { "choreId": 1, "activeChore": false },
//         { "choreId": 2, "activeChore": true },
//         { "choreId": 3, "activeChore": false },
//         { "choreId": 4, "activeChore": true },
//         { "choreId": 5, "activeChore": true },
//         { "choreId": 6, "activeChore": true },
//         { "choreId": 7, "activeChore": true },
//         { "choreId": 8, "activeChore": true },
//         { "choreId": 9, "activeChore": true }];
//     // let currentMatching = [{ "personId": 0, "choreId": 0, "completed": true }, { "personId": 1, "choreId": 1, "completed": true }, { "personId": 2, "choreId": 2, "completed": true }, { "personId": 3, "choreId": 3, "completed": true }, { "personId": 4, "choreId": 4, "completed": true }, { "personId": 5, "choreId": 5, "completed": true }, { "personId": 6, "choreId": 6, "completed": true }, { "personId": 7, "choreId": 7, "completed": true }, { "personId": 8, "choreId": 8, "completed": true }, { "personId": 9, "choreId": 9, "completed": true }];
//     let archiveWeeks = [[
//         { "personId": 0, "choreId": 0, "completed": true }, 
//         { "personId": 1, "choreId": 1, "completed": true }, 
//         { "personId": 2, "choreId": 2, "completed": true }, 
//         { "personId": 3, "choreId": 3, "completed": true }, 
//         { "personId": 4, "choreId": 4, "completed": true }, 
//         { "personId": 5, "choreId": 5, "completed": true }, 
//         { "personId": 6, "choreId": 6, "completed": true }, 
//         { "personId": 7, "choreId": 7, "completed": true }, 
//         { "personId": 8, "choreId": 8, "completed": true }, 
//         { "personId": 9, "choreId": 9, "completed": true }]];
//     let names = [
//         { id: 0, name: "Ruben", gender: Gender.Male },
//         { id: 1, name: "Anouk", gender: Gender.Female },
//         { id: 2, name: "Mathijs", gender: Gender.Male },
//         { id: 3, name: "Kim", gender: Gender.Female },
//         { id: 4, name: "Thomas", gender: Gender.Male },
//         { id: 5, name: "Melki", gender: Gender.Male },
//         { id: 6, name: "Jette", gender: Gender.Female },
//         { id: 7, name: "Manon", gender: Gender.Female },
//         { id: 8, name: "Neve", gender: Gender.Male },
//         { id: 9, name: "Anna", gender: Gender.Female },];
//     let chores = [
//         { id: 0, chore: "Keuken", gender: Gender.Other },
//         { id: 1, chore: "Keuken", gender: Gender.Other },
//         { id: 2, chore: "Woonkamer", gender: Gender.Other },
//         { id: 3, chore: "Woonkamer", gender: Gender.Other },
//         { id: 4, chore: "Gang", gender: Gender.Other },
//         { id: 5, chore: "Apparaten en washok", gender: Gender.Other },
//         { id: 6, chore: "Oud papier en glas", gender: Gender.Other },
//         { id: 7, chore: "Oud papier en glas", gender: Gender.Other },
//         { id: 8, chore: "WC/Douche jongens", gender: Gender.Male },
//         { id: 9, chore: "WC/Douche meisjes", gender: Gender.Female },
//         { id: 10, chore: "Geen taak", gender: Gender.Other }];

//     expect(match(archiveWeeks, chores, names, absence, activeChores)).toStrictEqual([0, 1, 3]);
// });
export {}