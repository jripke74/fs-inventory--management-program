// Build an Inventory Management Program
// In this lab, you will build an inventory management program that will allow you
// to add, update, find and remove products from the inventory. You will use an
// array of objects to represent your inventory, where each object will have name
// and quantity as the keys.

// Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// 1. You should declare an empty array named inventory that will store product
// objects having a key name with the value of a lowercase string, and a key
// quantity with the value of an integer.
// 1. You should declare an empty array named inventory.
// 2. You should have a function named findProductIndex.
// 3. findProductIndex("flour") should return the index of the object having name
// equal to "flour" inside the inventory array.
// 4. findProductIndex("FloUr") should return the index of the object having name
// equal to "flour" inside the inventory array.
const inventory = [];
function findProductIndex(product) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === product.toLowerCase()) {
      return i;
    }
  }
  return -1;
}
