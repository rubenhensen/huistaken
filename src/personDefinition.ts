enum Gender {
    Male,
    Female
}


interface Person {
    id: number,
    name: string,
    gender: Gender
}

export type { Person };
export { Gender };