const profile = {
  name: 'Sorin',
  age: 53,
  coords: {
    lat: 0,
    lgt: 13,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;
const {
  coords: { lat, lgt },
}: { coords: { lat: number; lgt: number } } = profile;
