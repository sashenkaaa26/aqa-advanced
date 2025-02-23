const car1 = {
  brand: 'BMW',
  model: 'X6',
  year: 2015
}

const car2 = {
  brand: 'Mercedes',
  model: 'Mercedes-Benz GLE',
  owner: 2020
}

const car3 = {...car1, ...car2};

console.log(car3);