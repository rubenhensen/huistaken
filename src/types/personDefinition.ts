enum Gender {
	Male,
	Female,
	Other
}

interface Person {
	id: number;
	name: string;
	gender: Gender;
}

export type { Person };
export { Gender };
