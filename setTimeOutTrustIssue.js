
console.log("Start")

setTimeout(function cb(){
    console.log("Callback")
},0);

console.log("End");

// //million 
// let startDat = new Date().getTime();
// let endDate = startDat;
// while(endDate <= startDat + 10000) {
// endDate = new Date().getTime();
// }

// console.log("While Expires")