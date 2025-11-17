
 //Promise 
 //Promise is an Object 
 //It has 3 states
 // 1.Pending ,2.Fullfilled(Will get value),3. Rejected (Give the reason also )


 const promise= new Promise((resolve,reject)=>{

 setTimeout(() => {
        
 reject('We have failure ')}, 2000);    
 setTimeout(() => {
        let user = {name:'Vinoth'};resolve('completed')
    }, 5000);
 });
// console.log(promise);
// console.log(promise);

//If we give any valsue in Resolve it will come as Promise Result 
//How to use  then and catch  

// promise.then((result) => console.log('Result : ',result))
promise.catch((reason)=>{ console.log(reason)})


//Why we need Promise 

function getUsers(){
    return new Promise((resolve,reject)=>{
    let users=[];
    setTimeout(()=>{
    users= [
        {username:'jhon',email:'jhon@gmail.com'},
        {username:'joe',email:'joe@gmail,com'}
    ];resolve(users)
    },2000);
    return users;
});
}

function findUser(username){
    getUsers().then((users)=>{
     const user= users.find((user) => user.username === username);
     console.log(user);
    });
}
//  console.log(findUser('joe'));
const pro = getUsers();
pro.then((user)=> console.log(user))


//  function fetchData(){
//     return new Promise((resolve)=>{
//       setTimeout(() => {
//         resolve("Data Successfully Fetched!...")
//       }, 5000);
//     })
//  }


//  function processData(){
//      fetchData().then((data)=>{
//       console.log(data);
//     })
//     .catch(err=>{
//         console.log(err);
//     })
//  }

//  console.log(processData());

//Async //Await

function fetchData(){
    return new Promise((resolve)=>{
      setTimeout(() => {
        resolve("Await Data Successfully Fetched!...")
      }, 2000);
    })
 }


 async function processData(){
    try{
   const data= await fetchData();
      console.log(data);
    }catch(err){
        console.log(err);
    }
 }

 console.log(processData());


//Fetch Api + JSON.parse / JSON.stringify

//GET Request 
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((response) => response.json())
.then(data=> console.log('GET Result : ',data))
.catch(err => console.error("Error: "+ err))


//POSt Request 
fetch("https://jsonplaceholder.typicode.com/posts",{
    method:'POST',
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify({
        title:"MyPost",
        body:"This is a new Post!.",
        userId:1
    })
})
.then((response) => response.json())
.then(data=> console.log('POST  Result : ',data))
.catch(err => console.error("Error: "+ err));

//JSON Parse 

const user ={
    name:"Alice",
    age:25
};
const jsonData = JSON.stringify(user);
const parsedData = JSON.parse(jsonData);
console.log(parsedData.name);
// console.log(jsonData)

// Async Iteration : for await ...of
//Multiple Async Operation was there we need to make them into Synchrozied

const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3"
]
async function fetchPost(){
    for await(const url of urls){
       const res = await fetch(url);
       const data = await res.json();
       console.log("Title:  ", data.title)
    }
}

fetchPost();

//setTimeout

const timer=setTimeout(()=>{
     console.log("From SetTimeOut Function")
},3000);
console.log("Timer ",timer) 
// returns a unique id for timer(useing the we are able to cancel that specified timer)

//SetInterval

const interval = setInterval(()=>{
   console.log("Interval!...") 
},1000);

clearInterval(interval);
console.log("Interval Stopped!...")


//Local Storage -- stores as a key value pair 
//Storage Capacity - 5 MB

// localStorage.setItem("name","vinoth");
// localStorage.getItem("name");
// localStorage.reomveItem("name");








