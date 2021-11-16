//Basic Types
    let id: number = 5;
    let company: string = "Paypal";
    let isPublished: boolean = true;
    let x: any = "Hello";//can be any type
    //let age: number; //can initialize without declaring
    let ids: number[] = [1,2,3,4];
    //ids.push('hello');//will be an error
    let arr: any[] = [1, true, 'Bob'];

//Tuple
    let person: [number, string, boolean] = [1, 'Joe', true];//Has to be in specific order

//Tuple Array
    let employee: [number, string] [];
    employee = [
        [1, 'Bubba'],
        [2, 'Dana'],
        [3, 'Tubs']
    ];

//Union
    let pid: string | number = 22;//can be string or number

//Enum
    //numeric values by default
    enum Direction1 {
        Up,//0
        Down,//1
        Left = 9,//9
        Right//10
    };
    enum Direction2 {
        Up = 'Up',
        Down = 'Down',
        Left = 'Left',
        Right = 'Right'
    };

//Objects
    type User = {
        id: number,
        name: string
    };
    const user: User = {
        id: 1,
        name: 'John'
    };

//Type Assertion
    let cid: any = 1;
    let customerId = <number>cid;//now a number only
    let customerId2 = cid as number;//either way works

//Functions
    //function parameters need a type
    //:number after parameters defines return type
    function addNum(x: number,y: number): number {
        return x + y;
    };

//Void
    //when return type isn't specified
    function log(message: string | number): void {
        console.log(message);
    };

//Interfaces
    //interfaces can't use unions "|"
    //Can be added onto though
    interface UserInterface {
        readonly id: number,//cannot reassign id after created
        name: string,
        age?: number//optional field
    };
    //adding new field
    interface UserInterface {
        admin: boolean
    };
    const user1: UserInterface = {
        id: 1,
        name: 'John',
        admin: true
    };
    //user1.id = 5;//throws an error. Set in read only.

    //Interface with functions
    interface Mathfunc {
        (x: number, y: number): number
    };
    const add: Mathfunc = (x: number, y: number): number => x + y;
    const sub: Mathfunc = (x: number, y: number): number => x - y;

//Classes

    interface PersonInterface {
        id: number,
        name: string,
        register(): string
    };

    class Person implements PersonInterface{
        //variables are public by default
        //private id: number; //can only be accessed within class. Can't even console.log it
        //protected name: string; //can only be accessed within class or if a class extends this one
        id: number;
        name: string;

        constructor(id: number, name: string) {
            this.id = id,
            this.name = name
        };

        register() {//has to return a string
            return `${this.name} is registered`;
        }
    }
    const cole = new Person(69, 'Cole Sammons');
    //Subclass
    class Employee extends Person {
        position: string;

        constructor(id:number, name: string, postion: string) {
            super(id, name);
            this.position = postion;
        };
    };

    const emp = new Employee(3, 'Joey', 'Developer');
    console.log(emp.register());

//Generics
    //T acts as a placeholder for any type
    function getArray<T>(items: T[]):T[] {
        return new Array().concat(items);
    };

    let numArray = getArray<number>([1,2,3,4]);
    let strArray = getArray<string>(['Joe', 'Billy', 'Bubba']);

    //numArray.push('hello');//throws error. Can only be number

