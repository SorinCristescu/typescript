const pepsi = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// Tuple
const coke: [string, boolean, number] = ['brown', true, 40];

type Drink = [string, boolean, number];

const tea: Drink = ['clear', false, 0];
const coffe: Drink = ['black', false, 10];
