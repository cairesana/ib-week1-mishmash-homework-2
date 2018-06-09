// Clean up your code: - Fix the formatting/indentation  && - Remove unnecessary code.

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
// 1.  Calling `cart.clear()` should remove all items from the items array.
// 1.  Calling `cart.clone()` should return a _new_ ShoppingCart object that contains all the same items.
//     However, the items array and all the items inside should be **copied** so that any changes to one of the carts does not affect the other.


class ShoppingCart {
  constructor() {
    this.items = [];

  }

  getItems() {
    return this.items;
  }

  addItem(itemName, quantity, price) {
    let newProduct = {};
    newProduct.name = itemName;
    newProduct.quantity = quantity;
    newProduct.pricePerUnit = price;

    this.items.push(newProduct);
  }

  clear() {
    this.items = []
    return this.items
  }

  
}

module.exports =  ShoppingCart
