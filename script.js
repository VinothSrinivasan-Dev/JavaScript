
//Hoisting 
 
function hoistExample() {
    a=10;
    let b=10;
}
hoistExample();
// console.log(a); //10
// console.log(b); //ReferenceError: b is not defined

//Data Types in JavaScript

//Closure 

function outerFunction(outerVariable) {
    var number =10;
    function inner(){
        var b=20
        console.log(number+b)
    }
    return inner;
}

const newFunction = outerFunction();
newFunction(); //30
// console.log("Closure "+newFunction); //function

//Arrow Functions

function add(a,b){
    return a+b;
}

const addArrow = (a,b) => a+b;

// console.log("Normal Function "+add(5,10));
console.log("Arrow Function "+addArrow(5,10));

//Lexical this 

const user={
    name:'Vinoth',
    normalFn:function(){
        setTimeout(function(){
            console.log("Normal Function this.name "+this.name); //undefined
        },1000);
    },
    arrowFn:function(){
        setTimeout(()=>{
            console.log("Arrow Function this.name "+this.name); //Vinoth
        },1000);
    }
}
user.normalFn();
user.arrowFn();


//Default Parameters

function greet(name="Guest"){
    console.log("Hello "+name);
}
greet(); //Hello Guest
greet("Vinoth"); //Hello Vinoth

//Rest Parameters

function sum(...numbers){
    let total=0;
    for(let number of numbers){
        total+=number;
    }
    return total;
}
console.log("Sum "+sum(1,2,3,4,5)); 

//Spread Operator

const arr1=[1,2,3];
const arr2=[4,5,6];
const combinedArr=[...arr1,...arr2];
console.log("Combined Array "+combinedArr); //1,2,3,4,5,6

const obj1={a:1,b:2};
const obj2={c:3,d:4};
const combinedObj={...obj1,...obj2};
console.log("Combined Object ",combinedObj); //{a:1,b:2,c:3,d:4}


//Call back hell 

function getUser(id){
   return new Promise((resolve) => setTimeout(()=>{
        console.log("Getting user from database");
        resolve({id:id,name:"Vinoth"});
    },1000));
}

function getPosts(user){
  return new Promise( (resolve) =>  setTimeout(()=>{
        console.log("Getting posts for user "+user.name);
        resolve(["Post1","Post2","Post3"]);
    },1000));
}

function getComments(post){
    return new Promise ( (resolve) =>setTimeout(()=>{
        console.log("Getting comments for post "+post);
        resolve(["Comment1","Comment2"]);
    },1000));
}

//Normal Call back hell
// getUser(1,(user=>{
//     getPosts(user,(posts=>{
//         getComments(posts[0],(comment=>{
//             console.log("Comments: ",comment);
//         }))
//     }))
// }))

//Using Promises to avoid callback hell
//Promises

// getUser(1)
// .then(user=>getPosts(user))
// .then(posts=>getComments(posts[0]))
// .then(comments=>console.log("Using Promise Comments: ",comments))
// .catch(err=>console.log(err));

//Async Await

async function fetchAll(){
    const user= await getUser(1);
    const posts=  await getPosts(user);
    const comments = await getComments(posts[0]);
    console.log("Using Async Await Comments: ",comments);
}

fetchAll();




