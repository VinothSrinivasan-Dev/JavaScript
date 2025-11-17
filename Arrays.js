
// let colors =["yellow","blue","green",1,2,3,true,{firstname:"Vinoth",age:25  }];

let colors= new Array("red","pink","orange");

colors.push("purple");
console.log("Colors Array "+colors);

// colors =[];
if(colors.length > 0){
    console.log("Array is not empty");
}
colors.unshift("red");
console.log("After Unshift Colors Array "+colors);

colors[1]='black';
console.log("Updated Colors Array "+colors);

colors.pop();
console.log("After Pop Colors Array "+colors);

colors.shift();
console.log("After Shift Colors Array "+colors);

// colors.indexOf("pink");
console.log("Index of Orange "+colors.indexOf("orange"));


//Arrays ForEach 

let numbers=[10,20,30,40,50];

numbers.forEach(function(number){
    console.log("Number Multipl b 2 : "+ number*2)
})

// Arrays Map

const products=["beans","pizza","burger","pasta"];

const updatedProds=products.map((el)=>{
    return el+' * ';
})
console.log("Products after map "+updatedProds);


const prices = [2,5,7,16,40,45,65];
const dicountAmount= 1;

prices.map((price) =>{
    return "Price after discount "+ (price - dicountAmount);
})

//Arrays Filter 

var nums =[10,15,20,25,30,35,40,45,50];

const filteredNums= nums.filter((num) => {
    return num > 25;
})
console.log("Filtered Numbers "+filteredNums);


// Filter With Objects Arrays 
var creatures=[
    {name:'Dog',type:'mammal'},
    {name:'Cat',type:'mammal'},
    {name:'Crocodile',type:'reptile'},
    {name:'Snake',type:'reptile'},
    {name:'Eagle',type:'bird'}
];
const mammales= creatures.filter((creature) => {
    return creature.type == 'mammal';
});
console.log("Mammal Creatures "+JSON.stringify(mammales));


//Arrays Find 

//Which returns the first matching element

let scores=[71,90,75,60,95,80];

const find=scores.find((score)=>{
    return score >70;
})
console.log("First score greater than 70 is "+find);

//Arrays Some

const hasHighScore=scores.some((score)=>{
    return score > 70;
});
console.log("Is there any score greater than 70 ? "+hasHighScore);

//Arrays Every

const allHighScores=scores.every((score)=>{
    return score > 70;
});
console.log("Are all scores greater than 70 ? "+allHighScores);

//Arrays Reduce

const totalScore = scores.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
},0);
console.log("Total Score is "+totalScore);


//Advances Arrays Methods Practice

//flattening an array of arrays
const arrayOfArrays=[0,[1,2],[3,4],[5,6]];

const flattenArray = arrayOfArrays.flat(1);
console.log("Flattened Array "+flattenArray);

//flatMap
const words =["Hello World","JavaScript is fun","I love coding"];

const wordList=words.flatMap((word)=>{
    return word.split(" ");
});
console.log("FlatMapped Words "+wordList[2]);

const singleWord=wordList.flatMap((word)=>{
    return word.split("");
}
);
console.log("FlatMapped Single Characters "+singleWord);


//Finding Index with findIndex

// returns the index of first matching element

const numberss =[5,12,8,130,44];

const foundIndex= numberss.findIndex((num)=>{
    return num >10;
});
console.log("Index of first number greater than 10 is "+foundIndex);

//Includes Method

const pets =['cat','dog','bat'];

const hasDog=pets.includes('dog');
console.log("Is dog present in pets array ? "+hasDog);

//Array Sorting and Reversing

const fruits =['banana','apple','orange','mango'];

fruits.sort();
console.log("Sorted Fruits "+fruits);

fruits.reverse();
console.log("Reversed Fruits "+fruits);

const numsArray=[40,100,1,5,25,10];

numsArray.sort((a,b) => a-b);
console.log("Sorted Numbers Ascending "+numsArray);

numsArray.sort((a,b) => b-a);
console.log("Sorted Numbers Descending "+numsArray);