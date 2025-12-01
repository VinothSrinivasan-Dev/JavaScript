
// "use strict";
// This is in Global Space 
console.log(this);// always  have a global object
//Incase of browser - this is like window
//Inside code this is an global object 

//this is inside a function 

function x(){
    //this
    //1. In Strict mode output of this is : undefined
    //2.In Not Strict mode output will be window obj
    console.log(this);
}
// x();

//this is in strict mode -(this substitution)--non strict mode
//According to the this substituion only in not strict mode
//if this value is undefined or null this value will be replaced by the global scope 
//Value of this inside the fun is undefined (Accord to this substution value willl be changed in Non Strict mode)


//this keyword value depends on how the function  is called 
x(); // -In strict mode is undefined
window.x() ;// in Strict mode->   window

//this is inside a object's method 

const student = {
    name:"Vinoth",
    printName:function(){// Here y is known as a methos
      console.log(this.name);
    }
    
}
student.printName();

// call apply bind methods ( Sharing methods)

const student2 ={
    name:"Deepa"
}


student.printName.call(student2);//Value of this becomes student 2 name 

//this inside arrow function
//Arrow function won't have this binding association
//Enclosing lexical context

const obj ={
    a:10,
    x:()=>{
        console.log(this);
    }
    

}

obj.x(); //ouptput is window object becoz obj was present lexically that's y value this will be window object 


//this inside nested arrow function

const obj2={
    a:10,
    x:function(){
        const y=()=>{
            console.log(this);
        }
        y();
    }
}

obj2.x();

//this inside dom

//    <button onclick=alert(this)>Touch me</button>   
//this will be reference to an HTML element

//this inside class,constrcutors












