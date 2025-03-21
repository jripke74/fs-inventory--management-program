// Build an Inventory Management Program
// In this lab, you will build an inventory management program that will allow you
// to add, update, find and remove products from the inventory. You will use an
// array of objects to represent your inventory, where each object will have name
// and quantity as the keys.

// Fulfill the user stories below and get all the tests to pass to complete the lab.

// Note: To prevent conflicts, keep only the logging mentioned in the user stories
// when running tests.

// User Stories:

// 1. You should declare an empty array named inventory that will store product
// objects having a key name with the value of a lowercase string, and a key
// quantity with the value of an integer.
// 1. You should declare an empty array named inventory.

const inventory = [];

// 2. You should have a function named findProductIndex.
// 3. findProductIndex("flour") should return the index of the object having name
// equal to "flour" inside the inventory array.
// 4. findProductIndex("FloUr") should return the index of the object having name
// equal to "flour" inside the inventory array.

function findProductIndex(productName) {
  return inventory.findIndex(
    (product) => product.name.toLowerCase() === productName.toLowerCase()
  );
}

// 3. You should create a function named addProduct that takes a product object as its argument.
// 4. If the product is already present in the inventory, the addProduct function should update
// its quantity value and log to the console the product name followed by a space and quantity updated.
// 5. If the product is not present in the inventory, the addProduct function should push the product to
// the inventory array and log the product name to the console, followed by a space and added to inventory.

function addProduct(product) {
  product.name = product.name.toLowerCase();
  const index = findProductIndex(product.name);
  if (index !== -1) {
    inventory[index].quantity += product.quantity;
    console.log(`${product.name} quantity updated`);
  } else {
    inventory.push(product);
    console.log(`${product.name} added to inventory`);
  }
}

// 6. You should create a function named removeProduct that takes the product name
// and quantity as its arguments.
// 7. The removeProduct function should subtract the passed quantity from the
// corresponding product object inside the inventory and log the string Remaining
// <product-name> pieces: <product-quantity> to the console, where <product-name>
// should be replaced by the product name, and <product-quantity> should be replaced
// by the product quantity.
// 8. If the quantity after the subtraction is zero, removeProduct should remove the
// product object from the inventory. If the quantity in the inventory is not enough
// to perform the subtraction, the removeProduct function should log the string Not
// enough <product-name> available, remaining pieces: <product-quantity> to the console.
// 9. If the product to remove is not present in the inventory, the removeProduct
// function should log <product-name> not found to the console.

function removeProduct(productName, productQuantity) {
  productName = productName.toLowerCase();
  const index = findProductIndex(productName);
  if (index === -1) {
    console.log(`${productName} not found`);
    return;
  }
  if (inventory[index].quantity < productQuantity) {
    console.log(
      `Not enough ${productName} available, remaining pieces: ${inventory[index].quantity}`
    );
  } else if (inventory[index].quantity === productQuantity) {
    inventory.splice(index, 1);
    return console.log(`${productName} not found`);
  } else {
    inventory[index].quantity -= productQuantity;
    console.log(
      `Remaining ${productName} pieces: ${inventory[index].quantity}`
    );
  }
}
