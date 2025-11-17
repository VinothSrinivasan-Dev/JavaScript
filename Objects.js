
let person ={
    firstname:"Jhon",
    lastname:"Doe",
    age:34,
    isStudent:true
}
//Create an Object -- It helps to create objects with a specified prototype object and properties.
let newPerson = Object.create({
    firstname:"xyz",
    lastname:"abc"
})
//using Array notation to get property value from Object
console.log(person['firstname'])

//Undefined 
console.log(person['hobby'])

// Change the value of a property
person.lastname="Vinoth";
person.age=25;

console.log("Updated Person Object:",person);

//delete a property from Object
delete person.isStudent;
console.log("After deleting isStudent property:",person);

console.log("firstName" in person);

//Object.Values Method

const session={
    id:1,
    time:`24July 2024`,
    device:'Laptop',
    browser:'Chrome'
}
const values=Object.values(session);
console.log("Object Values:",values); // [1, '24July 2024', 'Laptop', 'Chrome']

//Object.Keys Method

const keys=Object.keys(session);
console.log("Object Keys:",keys); // ['id', 'time', 'device', 'browser']

//Object.entries Method

Object.entries(session);
console.log("Object Entries:",Object.entries(session)); 
// [['id', 1], ['time', '24July 2024'], ['device', 'Laptop'], ['browser', 'Chrome']]

//Object Entries alwasy give Aescending order based on keys

const nums={
    45:1,
    32:1,
    78:1,
    12:1
}
console.log(Object.entries(nums));

//Object.freeze Method
// Which helps to freeze an object. A frozen object can no longer be changed.

let usr={
    name:'Vinoth',
    age:25
}
Object.freeze(usr);
usr.lastname='Srinivasan'; //This will not add a new property
usr.age=30; //This will not change the age property
console.log("After trying to modify frozen object:",usr); //{ name: 'Vinoth', age: 25 }

//Object.seal Method
// Which helps to seal an object. A sealed object prevents new properties from being added to it and marks all existing properties as non-configurable.
let emp={
    name:'Alice',
    age:28
}
Object.seal(emp);
emp.age=30; //This will change the age property
emp.lastname='Johnson'; //This will not add a new property
console.log("After trying to modify sealed object:",emp); //{ name: 'Alice', age: 30

//Object.assign Method 
const target={a:1,b:2};
const source={b:4,c:5};
const returnedTarget=Object.assign(target,source);
console.log("After Object.assign:",returnedTarget); //{ a: 1, b: 4, c: 5 }

//this Keyword in Object

function createCharacter(name){
    return {
        name,
        greet:function(){
            console.log(`Hello, I am ${this.name}`);
        }
    }

}

const { greet }=createCharacter('Aragon');
greet();

//New
//Uses constructor to create an object

function character(name){
    this.name=name;
}

const name=new character('Legolas');
console.log("Character Name:",name.name); //Legolas`


//Prototype
// Every JavaScript object has a prototype. A prototype is also an object.
// All JavaScript objects inherit their properties and methods from their prototype.
// Date objects inherit from Date.prototype
// Array objects inherit from Array.prototype

// const nature = {
//     attack: function() { 
//         console.log("Hit !..");
//     }   
// }
// const fighter={
//     name:"Hulk",
//     __proto__:nature,
// }

// fighter.attack();

//here we are setting the prototype of fighter object to nature object

function Power(name){
    this.name=name;
    this.attack=function(){
        console.log(`${this.name} attacks!.`);
    }

}
function attackter(name){
    this.name=name;
}
attackter.prototype=new Power();
const powerFighter= new attackter('Thor');
powerFighter.attack();
// console.log(attackter)


//Class

class Character{
    constructor(name){
        this.name=name;
    }

    attack(){
        console.log(`${this.name} attacks!..`);
    }
}

class Fighter extends Character{
    constructor(name){
        super(name);
    }
}
const fighter= new Fighter('Ironman');
fighter.attack();


//Object Destructuring in Functions
//Without destructuring

function displayInfo(user){
     console.log(`name:${user.name},Age:${user.age}`);

}

// displayInfo({age:23});

//With Desturcturing 
function displaywithDestructure({name="Admin",age=18}){
    console.log(`name:${name},Age:${age}`);

}
//While doing Destructuring we can define our user details 

// displaywithDestructure({age:34});


// Getters and Setters
const personWithDetails = {
    firstName: 'Vinoth',
    lastName: 'Srinivasan',
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value){
        const [first,last]= value.split(" ");
        this.firstName = first;
        this.lastName = last;
    }
}
// console.log(personWithDetails.fullName)
person.fullName ="Arun Srinivasaan";
// console.log(personWithDetails)

//Object Methods Shorthand


//Old Way 
const mathOld ={
    add:function(a,b){
        return a+b;
    }
}
console.log(mathOld.add(1,2))

//ES6 New Way 
const math = {
    add(a,b){
        return a*b;
    }
}
console.log(math.add(1,5));