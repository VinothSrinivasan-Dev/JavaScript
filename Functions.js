// a();
// b(); //not defined 
//Function Statement also known as Function Declaration 

function a(){
  console.log("a calßled")
}

a();

//Function Expression

var b = function(){
console.log("B called as Function Expression")
}
b();

//In both Function statement and Expression Hoisting will be fifferent 

//When you call the function even before it was created it will give the output 
//But in Function expression it will thorw not defined 

//Anonymous Function -- Fn without a name called anonymous fn
//This function are user wheren functions are used as a values.
var c = function () {
  console.log("Anonymous function")
}
c();

//Named Function Expression
function namesFunction(){
    console.log("Named Function ")
}
namesFunction();

//Difference btw parameters and arguments
function xy(param1,param2){
   console.log(param1,param2)
}
//Below are the arguments
xy(1,2) ;

//First class Functions
//Function inside another function passed as an argument known as first class functions
//Ability to use the functions as values   known as first class functions
var f=function(p1){
    // console.log(p1);
    return function(){

    }
}
function xyz(){

}

// f(xyz);
console.log(f())







