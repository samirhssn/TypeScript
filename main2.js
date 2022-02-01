"use strict";
exports.__esModule = true;
function add(num1, num2) {
    return num1 + num2;
}
var sum = add(7, 11);
// console.log(sum);
// add(7,'11');
//Optional Parameters
function Add(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
// console.log(Add(5,10));
// console.log(Add(5));
//Default Parameters
function Sum(num1, num2) {
    if (num1 === void 0) { num1 = 15; }
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
console.log(Sum(7, 4));
console.log(Sum()); // Default values will be taken
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: 'Samir',
    lastName: 'Husain'
};
fullName(p);
