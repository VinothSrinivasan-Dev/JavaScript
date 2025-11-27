//E-Commerce Application as base exaple

//Create a ordr
//Proceed to payment
//Get Order Summry
//Update wallet

const card = ["apple","iphone","kurta","things"];

appiu.createOrder(cart,function (){

   appiu.proceedToPayment(function(){
      
        appiu.showOrderSummary(function(){

            appiu.updateWallet();
        });
 
  })

})




