
//Closuers -- A function binds together in lexical Environment;
/* A Closure is the combination of function bundled together with referenecs
to its surrounding state(the lexical environment).

In Other words, A closured will gives you acces to the oute function's scoep from inner function.

*/
function  z(){
  var b=900;
function x(){
  var a= 13;
   function y(){
    console.log(a,b);
  }
  a=90;
y()

  }
  x()
}


// z();


/*
Uses of Closures;
1. Module Design Pattern
2.Currying
3.Functions like once
4.memoize
5.maitaining state in async world
6.setTimeoUts
7.Iterators
and many more...
*/


//SetTimeout + Closures
 function x(){
  var i=1;
  setTimeout(()=>{
    console.log(i);
  },1000)
  console.log("Javascript Learning ")
 }

 x();

 // Want to print the number 1s,2s,3s,4s,5s,6s

 function x1(){
  for(let i=0;i<=5;i++){
    setTimeout(()=>{
      console.log(i);
    },i*1000)
  }
 }

 x1();


 //Achive this without using let  How ?

  function x2(){
   for(var i=0;i<=5;i++){
    function close(o){
      setTimeout(()=>{
      console.log("Using  Var ",o);
    },o*1000);
  }
  close(i); //While callling this every time new copy of i will be passed to this function 
    }
 }

 x2();