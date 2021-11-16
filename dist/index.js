"use strict";
let id = 5;
let company = "Paypal";
let isPublished = true;
let x = "Hello";
let ids = [1, 2, 3, 4];
let arr = [1, true, 'Bob'];
let person = [1, 'Joe', true];
let employee;
employee = [
    [1, 'Bubba'],
    [2, 'Dana'],
    [3, 'Tubs']
];
let pid = 22;
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 9] = "Left";
    Direction1[Direction1["Right"] = 10] = "Right";
})(Direction1 || (Direction1 = {}));
;
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
;
const user = {
    id: 1,
    name: 'John'
};
let cid = 1;
let customerId = cid;
let customerId2 = cid;
function addNum(x, y) {
    return x + y;
}
;
function log(message) {
    console.log(message);
}
;
;
;
const user1 = {
    id: 1,
    name: 'John',
    admin: true
};
;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
;
class Person {
    constructor(id, name) {
        this.id = id,
            this.name = name;
    }
    ;
    register() {
        return `${this.name} is registered`;
    }
}
const cole = new Person(69, 'Cole Sammons');
class Employee extends Person {
    constructor(id, name, postion) {
        super(id, name);
        this.position = postion;
    }
    ;
}
;
const emp = new Employee(3, 'Joey', 'Developer');
console.log(emp.register());
function getArray(items) {
    return new Array().concat(items);
}
;
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Joe', 'Billy', 'Bubba']);
