"use strict";
exports.__esModule = true;
var message = 'Welcome Back!';
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = 'SamirHusain';
var isBeginner = true;
var total = 0;
var name = 'Samir';
var sentence = "My name is ".concat(name, ". \nI just started learning Typescript");
// console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3, 4, 5, 6, 7];
var list2 = [1, 2, 3, 4, 5, 6, 7];
// console.log(list1);
// console.log(list2);
var person1 = ['Samir', 20];
// console.log(person1);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 5] = "Red";
    Colors[Colors["Green"] = 6] = "Green";
    Colors[Colors["Blue"] = 7] = "Blue";
})(Colors || (Colors = {}));
;
var c = Color.Blue;
var cs = Colors.Green;
// console.log(c);
// console.log(cs);
var randomValue = 11;
randomValue = true;
randomValue = 'PayUID';
// console.log(randomValue);
// let myVariable: any = 10;
var myVariable = 17;
function hasName(obj) {
    return !!obj &&
        typeof obj == "object" &&
        "name" in obj;
}
if (hasName(myVariable)) {
    // console.log(myVariable.name);
}
// console.log(myVariable.name);
// myVariable();
// (myVariable as string).toUpperCase();
var a;
a = 10;
a = true;
var b = 20;
// b = true;
var multiType;
multiType = 21;
multiType = true;
// multiType = 'PayUID';
// console.log(multiType);
var anyType;
anyType = 21;
anyType = true;
anyType = 'PayUID';
console.log(anyType);
