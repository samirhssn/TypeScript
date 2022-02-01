"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Employee = /** @class */ (function () {
    //Constructor: A function which has same name as the class
    function Employee(name) {
        //name assign to variable (employeeName)
        this.employeeName = name;
    }
    //Method: function declared inside a class
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.employeeName));
    };
    return Employee;
}());
//Creating instance of class Employee (object)
var emp1 = new Employee('Samir Husain');
//Accessing the members of the class Employee
// console.log(emp1.employeeName);
// emp1.greet();
//Inheritance: class get some properties from another class
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    //Constructor of class Manager
    function Manager(managerName) {
        //getting properties of base class constructor
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
//Creating instance of class Manager (object)
var m1 = new Manager('Mr. Dinakaran');
//Accessing the members of the class Manager
console.log(m1.employeeName);
m1.delegateWork();
m1.greet();
/* Access specifier: Keywords that restrict the scope of the data members & members functions.
There are three level of access specifiers i.e: public, protected, private.

> Public: members declared as public can be accessed outside the class
> Private: members declared as private cannot be accessed outside the class
> Protected: members declared as protected cannot be accessed outside the class, however they can be
accessed in inherited classes */
//by default all the members of the class are public
