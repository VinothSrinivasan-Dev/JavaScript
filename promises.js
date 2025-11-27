//Promises
/*
Promise object is placeholder until we receive the value 
Promise is a container for future value

Promise is an Object representing eventual completion or failure of an asynchrounus functions.

*/

/*
1. Before promise we used to depend on callback functions which would result in 1.) Callback Hell (Pyramid of doom) | 2.) Inversion of control
2. Inversion of control is overcome by using promise.
  2.1) A promise is an object that represents eventual completion/failure of an asynchronous operation.
  2.2) A promise has 3 states: pending | fulfilled | rejected.
  2.3)  As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
  2.4) A promise resolves only once and it is immutable. 
  2.5) Using .then() we can control when we call the cb(callback) function.
   Immutable and Resolve only one
3. To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'
4. A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then()

*/
const cart = ["bedsheet","shoes","pants","shorts"];
// //Callbacck wat to write code 
// //We are passing function to another function
// createOrder(cart,function(orderId){
//   proceedToPayment(orderId);
// })
 


// const promise = createOrder(cart);

// //{data: OrderDetails}
// //We write code into Promise 
// //Here we are attaching the function into promise
// //We are having control of our program not line callback 
// //Promise Chaining 
// promise.then((orderId)=>{
    //  return proceedToPayment(orderId);
// })
// .then(function(paymentInfo){
//     return showOrderSummary(paymentInfo);
// })
// .then(function(paymentInfo){
//   return updateWalletUpdate(paymentInfo);
// })
//

// const GITHUB_API = "https://api.github.com/users/VinothSrinivasan-Dev";

// const user = fetch(GITHUB_API);

// console.log(user);

// user.then(function(data){
//     console.log(data);
// })

//Create our own promise 

const carts =["shoes","pants","kurta"];

const promise = createOrder(carts);
console.log(promise);

promise
.then(function(orderId){
    console.log(orderId);
    return orderId;
    // proceedToPayment(orderId);
})
// .catch(err => console.log(err.message))
.then(function(orderId){
    return proceedToPayment(orderId)
})
.then(function(paymentInfo){
    console.log(paymentInfo);
    return paymentInfo;
})
.then(function(paymentInfo){
    return showOrderSummary();
})
.then(function(orderSummary){
    console.log(orderSummary)
    return orderSummary;
})
.then(function (orderSummary){
    return updateWallet(orderSummary);
})
.then(function(status){
    console.log("Thank you for your Order Visit again!..")
})
.catch(err => console.log(err.message))


function showOrderSummary(paymentInfo){
   return new Promise(function(resolve,reject){
    resolve("Order Summary for Your Product Tshits!.")
   })
}

function updateWallet(orderSummary){
    return new Promise(function(resolve,reject){
    resolve("Wallet Balance Updated Wallet Balance is 12$")
   })
}
function proceedToPayment(orderId){
  return new Promise (function(resolve,reject){
    resolve("Payment SuccessFully!..");
  });
}
//Producer 

function createOrder(carts){

    const pr= new Promise(function(resolve,reject){
        //Create Order
        //Validate Cart
        //OrderId is Required(If order Success)
        if(!validateCart(cart)){
            const err= new Error("Cart is not Valid")
            reject(err);
        }
        //logic for createOrder
        const orderId = "123556";
        if(orderId){
            setTimeout(function(){
                resolve(orderId)
            },5000)
          
        }
    })

    return pr;
}

function validateCart(cart){
   return true;
}