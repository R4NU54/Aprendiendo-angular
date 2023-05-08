export class Person {
  //   public name: string;
  //   private address: string;

  // Inyectamos la clase en el constructor.
  constructor(public firstName: string, public lastName: string, private address: string = 'No address') {
    // this.name = 'John';
    // this.address = 'Benalmádena';
  }
}

// export class Hero extends Person {
//   constructor(public alterEgo: string, public age: number, public realName: string) {
//     super(realName, 'New York');
//   }
// }
export class Hero {
  //   public person: Person;

  constructor(public alterEgo: string, public age: number, public realName: string, public person: Person) {
    // this.person = new Person(realName);
  }
}
const tony = new Person('Tony', 'Stark', 'New York');

const ironMan = new Hero('Ironman', 45, 'Tony', tony);

console.log(ironMan);
