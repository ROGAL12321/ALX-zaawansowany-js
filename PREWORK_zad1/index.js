const products = [
  { name: "Bananas", pricePerUnit: 1.49, quantity: 2 },
  { name: "Bread", pricePerUnit: 3.29, quantity: 1 },
  { name: "Chocolate", pricePerUnit: 5, quantity: 2 },
];

function sumItems(items) {
  let sum = 0;
  items.forEach(item => sum += item.pricePerUnit * item.quantity);
//  items.forEach(function(item) {
//    sum = sum + (item.pricePerUnit * item.quantity)
//  })
  return sum;
}

console.log(sumItems(products)) //powinno zwrócić 16.27