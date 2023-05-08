// Destructuración de argumentos.

export interface Products {
  description: string;
  price: number;
}

interface TaxCalculationOptions {
  tax: number;
  products: Products[];
}

const phone: Products = {
  description: 'iPhone 14',
  price: 150.0,
};

const tablet: Products = {
  description: 'iPad Mini',
  price: 250.0,
};

export function taxCalculation(options: TaxCalculationOptions): [number, number] {
  let total = 0;
  // Se destructura el options de arriba.
  const { tax, products } = options;
  // Se destructura el product.
  // products.forEach((product) => {
  products.forEach(({ price }) => {
    total += price;
  });
  return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.21;

// Se destructura el result.
// const result = taxCalculation({
const [total, taxTotal] = taxCalculation({
  products: shoppingCart,
  tax: tax,
});

// console.log('Total: ', result[0]);
// console.log('Tax: ', result[1];
console.log('Total: ', total);
console.log('Tax: ', taxTotal);

export {};
