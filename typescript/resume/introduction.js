/*
    TypeScript is a superset to JavaScript

    To install -> run "npm install typescript"

    TypeScript Code doesn't execute in the Browser
    If you try run TypeScript code in the browser; it will fail
    
    We need to compile TypeScript to JavaScript before run in the client

    To Compile -> run "npx tsc <file-name>"

    If we need errors, in the compile moment they are to hit
*/
function add(firstValue, secondValue) {
    return firstValue + secondValue;
}
/*
    const result = add('2', 5);  -> It is not valid because one argument is String and we function wants Number
*/
var result = add(2, 5); // valid
console.log(result);
