import type { Gender } from './personDefinition';

interface Chore {
	id: number;
	chore: string;
	gender: Gender;
	amount: number;
}

export type { Chore };
