// Hello, World in TypeScript
export {}
let message = 'Welcome Back!';
console.log(message);

let x = 10;
const y = 20;

let sum;
const title = 'SamirHusain';

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Samir';

let sentence: string = `My name is ${name}. 
I just started learning Typescript`;

// console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1,2,3,4,5,6,7];
let list2: Array<number> = [1,2,3,4,5,6,7];

// console.log(list1);
// console.log(list2);

let person1: [string, number] = ['Samir', 20];
// console.log(person1);

enum Color {Red, Green, Blue};
enum Colors {Red = 5, Green, Blue};
let c: Color = Color.Blue;
let cs: Colors = Colors.Green;
// console.log(c);
// console.log(cs);

let randomValue: any = 11;
randomValue = true;
randomValue = 'PayUID';
// console.log(randomValue);

// let myVariable: any = 10;
let myVariable: unknown = 17;

function hasName(obj: any): obj is {name: string} {
    return !!obj &&
    typeof obj == "object" &&
    "name" in obj
}

if (hasName(myVariable)) {
    // console.log(myVariable.name);
}
// console.log(myVariable.name);
// myVariable();
// (myVariable as string).toUpperCase();

let a;
a = 10;
a = true;

let b = 20;
// b = true;

let multiType: number | boolean;
multiType = 21;
multiType = true;
// multiType = 'PayUID';
// console.log(multiType);

let anyType: any;
anyType = 21;
anyType = true;
anyType = 'PayUID';
console.log(anyType);