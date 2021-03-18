// const carMakers: string[] = [];
const carMakers = ['ford', 'toyota', 'mercedes'];

const dates = [new Date(), new Date()];

// const carByMakers: string[][] = []
const carByMakers = [['focus'], ['corolla'], ['S500']];

// Help with inference when extracting values
const newCar = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push('kia');

// Help with map
carMakers.map((car: string): string => {
  return car.toLowerCase();
});

// Flexible types
// const importantDates: (Date | string)[] = []
const importantDates = [new Date(), '2021-03-08'];
importantDates.push(new Date());
importantDates.shift();
