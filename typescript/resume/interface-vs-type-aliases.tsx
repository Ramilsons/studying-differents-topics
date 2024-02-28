/*
    Interface and Type Aliases seem similar but they are not
*/

type Animal = {
    name: string,
    legs: number
}

interface AnimalTwo {
    name: string,
    legs: number
}


// It is the difference:

/*
    1) The time to typescript check your code is more fast using interface. 
        In big project this point is important

*/

/*
    2) In the interface we can merge two interface when we can declare it again
*/

interface School {
    name: string
}

interface School {
    phone: number
}

let mainSchool : School = {
    name: 'Alberto',
    phone: 11944450349
}

/* Trying the same example in type we get a error */ 
type School2 = {
    name: string 
}
  
type School2 = {
    age: number
}