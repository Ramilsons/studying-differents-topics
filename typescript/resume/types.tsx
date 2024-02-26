/*
    Primitives: number, string, boolean
    More Complex Types: arrays, objects
    Function types, parameters
*/


// Core Primitives

let age: number;
age = 12;   // valid
age = 12.1; // valid
age = '12'; // invalid


let userName: string;
userName = 'Ramilson'; // valid
userName = 1;   // invalid


let isParent: boolean
isParent = true;    // valid
isParent = false;   // valid



// More Complex Types

let hobbies: string[];  // Array of Strings
hobbies = ['Soccer', 'Video-Games', 'TV'];  // valid
hobbies = ['Soccer', 'Video-Games', 1]      // invalid

let ages: number[];     //Array of Numbers


let person: {  // Object Type
    isEmployee: boolean,
    name: string,
    age: number
};

person = {
    isEmployee: true,
    name: 'Ramilson',
    age: 22
}               // valid

person = {
    isEmployee: 'true',
    name: 'Ramilson',
    age: '22'
}               // invalid


let people: {  // Array of Object Type
    isEmployee: boolean,
    name: string,
    age: number
}[];