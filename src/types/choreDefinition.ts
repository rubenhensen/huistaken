import type { Gender } from "./personDefinition";

interface Chore {
    id: number,
    chore: string,
    gender: Gender
}

export type { Chore };