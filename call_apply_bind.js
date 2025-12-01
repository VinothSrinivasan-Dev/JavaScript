let name={
    firstName:"Vinoth",
    lastName:"Srinivasan"
};
let printFullNamae = function (hometown,state){
    console.log(this.firstName+" ",this.lastName+" "+ hometown);

}
//Function borrowing 
//call -- passing arguments indicidually
printFullNamae.call(name,"Sholinghur","TamilNadu");
//apply-- passing argumnets as list
printFullNamae.apply(name,["Ranipet","Madhurai"])
//bind 
let myName= printFullNamae.bind(name,"Chennai","America");
console.log(myName);
 myName()//Invoke


 //here bind will copying the original method binding into calling method invoke later
 


 //Function Currying  achiving in bind method
/*
Currying refers to the process of transforming a function with multiple arity into the same function with less arity. The curried effect is achieved by binding some of the arguments to the first function invoke, so that those values are fixed for the next invocation.
*/
 let multply= function(x,y){
    console.log(x*y)
 }

 let multyplyTwo= multply.bind(this,2);
 multyplyTwo(4);

  let multyplyThree= multply.bind(this,3);
 multyplyThree(4);

 let closure = function(x){
    return function(y){
        console.log(x*y);
    }
 }

let example= closure(5)
example(10)