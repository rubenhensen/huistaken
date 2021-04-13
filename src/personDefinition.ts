// import type Gender from './genderDefinition'
import type {Gender} from './genderDefinition'

interface Person {
    name: string,
    gender: Gender
}

// export default Person;
export type {Person};