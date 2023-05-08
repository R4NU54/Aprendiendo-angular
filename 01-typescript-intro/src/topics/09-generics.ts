export function whatsMyType<T>(argument: T): T {
  return argument;
}

const amIString = whatsMyType<string>('Hola Mundo');
const amImunber = whatsMyType<number>(100);
const amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);

console.log(amIString.split(' '));
console.log(amImunber.toFixed());
console.log(amIArray.join('-'));
