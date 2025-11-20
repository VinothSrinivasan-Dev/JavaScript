function nestedFuncc(){
  var c=20;
function outer(b){

   function inner(){
    console.log(a,b,c);
  }
  //  let a =10;
  return inner;

}
return outer("Hello World");
}
let a = 100; //if we don't have a at line 8 point this 100
var close = nestedFuncc();
//Instead of using ths we can use outer()("hello")
//Second () -calling the inner function 
close();


//Data hiding and Encapsulation 

function counter(){
var count =0;
function incrementCount(){
  count++;
  console.log(count);
}
return incrementCount;
}
var counter1 = counter();
counter1();
var counter2=counter();
counter2();counter2();counter2();counter2();
//Again Starts a fresh counter
// console.log(count);count varibale cannot access here!..


//Make our code scalable 

function CounterConstructor(){
  var count=0;
  this.incrementCount = function(){
    count++;
    console.log(count);
  }
  this.decrementCounter = ()=>{
    count--;
    console.log(count);
  }
}

var counterNew =new  CounterConstructor();
counterNew.incrementCount();

//Diadvantages
/*
1.Over Consumption of memory
2.Closure Are not gragbage collected
3.if it is not handled properly 

*/

//Garbage Collector --
// Is a program of JS Engine.Clean up  the unusued variables from  memory 

//How Closures and Garbage collector related to each other 

function garbageExample(){
  var a =0,z=10;
  return function b(){
    console.log(a);
  }
}
garbageExample()();  //here a won't go to garbage becox it was in closure


//Smartly Collects  here z is gabage collected 




