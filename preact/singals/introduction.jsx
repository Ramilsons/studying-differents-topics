/*
    It is a method to control one value on client side using Preact

    Is similar to React's useState 
*/

/*
    Rules
*/

/* 1) Export Signal by Preact */
import { signal } from "@preact/signals";

/* 2) Create a variable with default value */
const count = signal(0); // in this case, default value is 0

/* 
    3) We can't create this variable inside of component. Always out
    of component 
    
    because always re-render the default value is apply and our count would be
    0 (never change)
*/


/* To access value {variable}.value */
console.log('This is my signal value: ' + count.value);

/* To change value  {variable}.value = {newValue} */
count.value = 2;

/* To change another value based on our signal computed(() => {  }) */
const double = computed(() => count.value * 2 ); // every count change, computed run and execute this line

/* To execute a function on every change effect(()) */
effect(() => {'My signal was updated: ' + count.value}) // run every signal change
    
    // The difference between Effect() and Computed() is: computed return a new signal and effect don't return