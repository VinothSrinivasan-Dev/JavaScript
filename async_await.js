
/*
async and await are keywords in JavaScript 
that are used to work with asynchronous code
making it easier to handle asynchronous 
operations like network requests, file I/O, or timers in a more synchronous-like manner, which can make your code more readable and maintainable.

1.What is async
2.What is await
3.How async await works behind the scene
*/

//Async awaut are used to handle promises
// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//    resolve("I am a P1  Promise")
//     },20000)
    
// })
// const p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//    resolve("I am a P2 Promise")
//     },30000)
    
// })

const API_URL ="https://api.github.com/users/VinothSrinivasan-Dev";

async function handlePromise(){
//1 . try catch to handle error 
//2. promise.catch()
    // try{
    const data = await fetch(API_URL);
  
    const jsonValue = await data.json();

    console.log(jsonValue);
    // }catch(err){
    //     console.log(err);
    // }
    
    
    //fetch -- Response.json() => jsonValue
    
}
handlePromise().catch((err)=>console.log(err))
//Async function always return a promise
//Either you return promise or lese it will automaticaky return a promise
// async function getData(){
//     return p;
// }

// const data = getData();

// data.then((data)=>{
//     console.log(data);
// })

//Before Async/Await

// function getData(){
// JS Engine  will not  wait promise to be resolve
//    p.then(res=>console.log(res))
//    console.log("JavaScript");
// }
// getData();


//After Async 
//Await only be used inside an async function.
//In Async await JS Engine wait for  proise to resolved and then only remaining logs will be printed
// async function handlePromise(){
//     console.log("Hello World")
//      //JS Engine waiting for resolve a promise
//     const val=await p1;
//     console.log("JavaScript")
//     console.log(val);

//     const val2=await p2;
//     console.log(val2);
// }
// handlePromise();


//Async Function background
//Call Stack is empty
//HandlePromise() into callStack
//Handle Promise is suspend move out of call stack
//After 5 seconds again into call stack -- Executing where it actually left

//Again Suspend out of callstak
//Once p2 resolved after 10 sec again come to call stack executing where it left


//async p1 , p2


//




