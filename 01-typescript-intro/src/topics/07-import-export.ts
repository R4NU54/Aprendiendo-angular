import { Products, taxCalculation } from './06-function-destructuring';

const shoppingCart: Products[] = [
  { description: 'iPhone 13', price: 240 },
  { description: 'iPad Mini', price: 300 },
];

// Tax = 0.15

const [total, taxTotal] = taxCalculation({ products: shoppingCart, tax: 0.15 });

console.log('Total: ', total);
console.log('Tax: ', taxTotal);
