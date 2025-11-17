
let decoration={
    color:'red',
    radius:10,
}
for(const prop in decoration){
    console.log(prop);//Get the Property keys 
    console.log(decoration[prop]);// Get the Property value

}

const arr = [1,23,45,1,"hello",true];
for (let a in arr){
    console.log(arr[a]);
}

//Spread operator and Rest Operator 

const ab = [1,2,3,4,5];
const newArr = [...ab,6,7,8];//Spread Opertor 
console.log(newArr);


const obj ={name:"kaka",age:45};

const obj2={...obj,city:"delhi"};///Spread Opertaor 

console.log(obj2);

const [first,...rest] =[1,2,3,4,5,6,7];//Rest operator 
console.log(first);
console.log(rest);

const {a,...res} ={a:1,b:2,c:3};
console.log(a);

//Destrcuturing 
//Array Destructruing 

const number=[1,2,4];
const [d,b,c]=number;

console.log(d);

//Object Desturturing 

const person = {
    name:"John",
    age:98
}
const {name,age}=person;
console.log(age);


//Nested Destructuring 

const data ={
    user:{
        id:1,
        email:"abc@gmail.com"
    }
}
const {user:{id,email}}=data;
// console.log(user.name)

//Optional Chaining 

const user1={ name:{
    address:"Chennai"
}};

console.log(user1.name?.address);// it will thorw error to avoid this we can use Optional

// ? -- Optional Chaining 


//Try catch Statement
try{
let result = add(12,2);
console.log(result);

}catch(e){
    console.log({name:e.name,message:e.message})
}finally{
console.log('bye');
}