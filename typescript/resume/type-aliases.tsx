/*
    Used to avoid duplicate and more easy to maintain  
*/

/* Wrong */
let person: {
    name: string,
    age: number
}

let people: {
    name: string,
    age: number
}[]


/* Correct */
type Person = {
    name: string,
    age: number
}

let person: Person;
let people: Person[];