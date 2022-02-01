// Classes: Data members & member functions bunched together
export {}
class Employee {
    employeeName: string;

    //Constructor: A function which has same name as the class
    constructor(name: string) {
        //name assign to variable (employeeName)
        this.employeeName = name;
    }

    //Method: function declared inside a class
    greet() {
        console.log(`Good Morning ${this.employeeName}`);
    }
}

//Creating instance of class Employee (object)
let emp1 = new Employee('Samir Husain');
//Accessing the members of the class Employee
// console.log(emp1.employeeName);
// emp1.greet();

//Inheritance: class get some properties from another class
class Manager extends Employee {
    //Constructor of class Manager
    constructor(managerName: string) {
        //getting properties of base class constructor
        super(managerName);
    }
    delegateWork() {
        console.log(`Manager delegating tasks`);
    }
}

//Creating instance of class Manager (object)
let m1 = new Manager('Mr. Dinakaran');
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