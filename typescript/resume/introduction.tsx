/*
    TypeScript is a superset to JavaScript

    To install -> run "npm install typescript"

    TypeScript Code doesn't execute in the Browser
    If you try run TypeScript code in the browser; it will fail
    
    We need to compile TypeScript to JavaScript before run in the client

    To Compile -> run "npx tsc <file-name>"
    After compile's process, it will generated a new file as JS format. This file can be read by the browser

    If we need errors, in the compile moment they are to hit
*/

function add (firstValue: number, secondValue: number) {
    return firstValue + secondValue;
}

/*
    const result = add('2', 5);  -> It is not valid because one argument is String and we function wants Number
*/

const result = add(2, 5); // valid
console.log(result);
