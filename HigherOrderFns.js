
//High Order Functions

/*
A Function takes another fn as an argumnent or retuns the fundtion fromit know as Higher Order Functions

*/

function x(){
    console.log("Higher Order Functions")
}

function y(x){
    x();
}
const radius = [3,1,2,4];

const area = function(radius){
    return Math.PI * radius * radius;
}

const circum = function(radius){
    return 2 * Math.PI * radius;
}
const calculate = function (radius,logic){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]))
    }
    return output;
}

//Calculate is similar to our map 
// doubt is how it is similar like our map take one input  but our function takes 2 inputs 

Array.prototype.calculateMapSimilar = function(logic){
     const output=[];
    for(let i=0;i<this.length;i++){
        output.push(logic(this[i]))
    }
    return output;
}

console.log(radius.calculateMapSimilar(area));//Similiar to our Map Function
console.log(radius.map(area));
// console.log(calculate(radius,circum))


// Repeate many our self below code 


const calculateArea = function (radius){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(Math.PI  * radius[i] * radius[i])
    }
    return output;
}

// console.log(calculateArea(radius));


//In JavaScript map,Filter, Reduce are the Higher order Functions



//Map - used to Transform it 
 
const arr =[5,1,2,3,4];

//Double

//Triple

//Binary
function double(x){
    return  x * 2;
}
function triple(x){
    return 3 * x;
}
function binary(x){
    return x.toString(2);
}
const answer= arr.map(binary);

console.log(answer);

//Filter 
//Filter Odd values 

function isEven(x){
    return x % 2 == 0;
}

const ans = arr.filter(isEven);
console.log(ans);

//Reduce -- gives a single input 

// Sum or max 
//Traditional Way 
function findSum(arr){
    let sum =0;
    for(let i of arr){
        sum +=i;
    }
    return sum;
}
function findMax(arr){
    let max =0;
    for(let i of arr){
        if(i > max){
            max=i;
        }
    }
    return max;
}


console.log(findMax(arr));
console.log(findSum(arr));

const reduceoutput = arr.reduce((acc,curr)=>{
    acc = acc + curr;

    return acc;
},0)

console.log(reduceoutput);


//Real word Examples for map,filter, reduce

const users= [
    {firstName:"Albert",lastName:"Einstein",age:26},
    {firstName:"Neymar",lastName:"Junior",age:66},
    {firstName:"elon",lastName:"musk",age:78},
    {firstName:"deepkia",lastName:"pelli",age:26},

];

//List of fullNames

function getFullName(users){
    return users.firstName+" "+ users.lastName;
}

const fullName = users.map(getFullName);
console.log("Full name of Users : ",fullName);
    
// find out how many peopel in same age {26 : 2},{50:3};

const reduceOutput = users.reduce((acc,curr)=>{
    
    if(acc[curr.age]){
       acc[curr.age] = ++ acc[curr.age];
    }else{
       acc[curr.age] =1;
    }
      return acc;
},{});

console.log(reduceOutput);

//use filter to find out  the person less than 50 age  with lastname of the person

const filterOutput = users.filter((x)=>x.age < 50).map((x)=>x.lastName);

console.log(filterOutput);


//Above Example instead of using filter and map together we can achieve this using Reduce also 



const output = users.reduce((acc, curr) => {
    if (curr.age < 30) {
        acc.push(curr.firstName)
    }
    return acc;
}, [])

console.log('output', output);
