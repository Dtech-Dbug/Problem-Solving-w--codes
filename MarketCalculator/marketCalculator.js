// TODO : a function that returns calculations
// ? params : itemName, item price/kg, item quantity, discount(optional)

const priceCalculator = (itemName, unitPrice, quantity, discount) => {
  let total;

  total = unitPrice * quantity;

  let list = {
    name: itemName,
    price: unitPrice,
    qty: quantity,
    total: total,
  };

  // * check if discount is undefined or null
  if ((discount === undefined) | (discount === null)) {
    return list;
  } else {
    let discountedPrice = (total * discount) / 100;

    let totalAfterDiscount = total - discountedPrice;

    list.totalAfterDiscount = totalAfterDiscount;

    return list;
  }
};

console.table(priceCalculator("Bread", 200, 8, 90));
