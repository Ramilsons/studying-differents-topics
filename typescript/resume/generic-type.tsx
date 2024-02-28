/*
    Imagine you want write a function which needs to add a value (can be array, string and etc) at the beginning of the array

    BUT the value need be the same type of array
*/

function insertAtBegging(array: any, value: any) {
    const newArray = [value, ...array];
    return newArray;
}

/* If you imagine this function behavior, you are wrong! */
insertAtBegging([2, 3, 5], 'a'); // it is valid and it should be invalid because is not the same type (string and numbers);


/* The solution is create generic type */
function insertAtBegging2<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}
/* 
    It is talking "Array parameter is the same type of value parameter" 
    and they can be of all types since they are be the same type
*/

insertAtBegging2([2, 3, 5],'a');    // invalid - the typescript alert because different types
insertAtBegging2(['a', 'a'], 'a');  // valid
insertAtBegging2([2, 3, 5], 10);    //valid