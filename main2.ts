// Function: reusable piece of code
export {}
function add(num1: number, num2: number): number {
    return num1 + num2;
}

let sum: number = add(7,11);
// console.log(sum);
// add(7,'11');

//Optional Parameters
function Add(num1: number, num2?: number): number {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1
    }
}

// console.log(Add(5,10));
// console.log(Add(5));

//Default Parameters
function Sum(num1: number = 15, num2: number = 10): number {
    return num1 + num2;
}

console.log(Sum(7,4));
console.log(Sum()); // Default values will be taken

/*
//Passing object as a parameter
function fullName(person: {firstName: string, lastName: string}) {
    console.log(`${person.firstName} ${person.lastName}`);
}

//Object with properties
let p = {
    firstName: 'Samir',
    lastName: 'Husain'
};

fullName(p); // function calling with object parameter
*/

//Interface: class that acts as a base class for other derived classes. (abstract class)
interface Person {
    firstName: string;
    lastName: string;
}

function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'Samir',
    lastName: 'Husain'
};

fullName(p);