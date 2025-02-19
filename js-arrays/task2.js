let numbers = [2,4,5,7,12];

function increaseNumbers(numbs) {
  return numbs.map((num,index) => num * index)
}

const increasedNumbers = increaseNumbers(numbers);
console.log( increasedNumbers);