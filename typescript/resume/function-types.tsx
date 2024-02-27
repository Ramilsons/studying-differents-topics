/*
    When we create a function we can "tipar" in two places

    1) parameters value
    2) return value
*/


/*
    in this case we have two parameters of number type
    and return is :number type
*/

function addOne(a: number, b: number): number {
    return a + b
}

/*
    if we don't pass any type on return,
    typescript will define automatic is some cases and 0 errors will to hit
*/
function addTwo(a: number, b: number) {
    return a + b
}

/*
    if one function doesn't have return
    the default type defined by typescript is :void
*/
function printMyValue(value: any) {
    console.log(value);
}