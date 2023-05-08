export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: 'Raúl',
};

const passenger2: Passenger = {
  name: 'Vanesa',
  children: ['Gaia', 'Arya'],
};

const returnChildrenNumber = (passenger: Passenger) => {
  const howManychildren = passenger.children?.length || 0;
  // const howManyChildren = passenger.children!.length;

  console.log(howManychildren);
};

returnChildrenNumber(passenger1);
