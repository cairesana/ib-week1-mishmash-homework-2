
// 1.  You must create a module named `ShoppingCart`. The test imports it with .... (---DONE!---)
// 1.  The module must export a `class`, so we can run `const cart = new ShoppingCart()` (---DONE!---)
// 1.  Right after constructing a new object, calling `cart.getItems()` should return an empty array. (---DONE!---)
// 1.  We should be able to call `cart.addItem(itemName, quantity, price)`, which adds a new item to an internal array.
// ...Subsequent calls to `cart.getItems()` should return the added items.
// ...Items in the array should be in this format:  (---DONE!---)
//     ```js
//     {
//       name: "Name of the item",
//       quantity: 1,
//       pricePerUnit: 99.99
//     }
//     ```
// 1.  Calling `cart.clear()` should remove all items from the items array. (---DONE!---)
// 1.  Calling `cart.clone()` should return a _new_ ShoppingCart object that contains all the same items.
//     However, the items array and all the items inside should be **copied** so that any changes to one of the carts does not affect the other.


class ShoppingCart {
  constructor() {
    this.items = [];
  }

  getItems() {
    return this.items
  }

  addItem(itemName, quantity, price) {
    this.newProduct = {};
    this.newProduct.name = itemName;
    this.newProduct.quantity = quantity;
    this.newProduct.pricePerUnit = price;

    this.items.push(this.newProduct);
  }


  clear() {
    this.items = [];
    return this.items
  }

  clone() {
    let cart2 = new ShoppingCart();
    cart2 = [...this.items]

    return cart2;
    //  clone does not works!!! :(
    // "cloned should be a separate copy: TypeError: cart2.getItems is not a function" -- couldn't figure out :(


  }
}


module.exports =  ShoppingCart
