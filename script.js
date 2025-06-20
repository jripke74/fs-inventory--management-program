const inventory = [];

function findProductIndex(productName) {
  return inventory.findIndex(
    (product) => product.name.toLowerCase() === productName.toLowerCase()
  );
}

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
