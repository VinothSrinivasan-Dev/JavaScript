//What is callback Function in JavaScript

setTimeout(() => {
    console.log("CallBacked")
}, 5000);

function x(y){
    console.log("x");
    y();

}

x(function y(){
    console.log("y")
})

//Blocking the main Thread

//Any opertion pausing the mainthread that is known as Blocking thread in main 

//Event Listeners 
function attachEventlistners(){
    let count=0;

document.getElementById("clickMe").addEventListener("click",function xyz(){
        console.log("Clicked and Listen by DOM",++count)
       })
    };

attachEventlistners();



