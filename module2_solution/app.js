(function(){
  'use strict';
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyController.$inject=['ShoppingListCheckOffService']
  function ToBuyController(ShoppingListCheckOffService){
    var toBuy=this;
    toBuy.items=ShoppingListCheckOffService.getToBuyItems();
    toBuy.bought=function(index){
      return ShoppingListCheckOffService.bought(index);
    };
  }

  AlreadyBoughtController.$inject=['ShoppingListCheckOffService']
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var alreadyBought=this;
    alreadyBought.boughtItems=ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService(){
    var service=this;
    var toBuyItems=[
      {
        name:"Cookies",
        quantity:"10"
      },
      {
        name:"Milk",
        quantity:"5"
      },
      {
        name:"Chips",
        quantity:"10"
      },
      {
        name:"ColdDrinks",
        quantity:"5"
      },
      {
        name:"Burger",
        quantity:"10"
      }
    ];
    var boughtItems=[];
    service.getToBuyItems= function(){
      return toBuyItems;
    };
    service.getBoughtItems= function(){
      return boughtItems;
    };
    service.bought= function(index){
      console.log(index);
      var newBoughtItem={
        name:toBuyItems[index].name,
        quantity:toBuyItems[index].quantity
      };
      boughtItems.push(newBoughtItem);
      toBuyItems.splice(index,1);
      console.log(boughtItems);
      console.log(toBuyItems);
    };
  }
})();
