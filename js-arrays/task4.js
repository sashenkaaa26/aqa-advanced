let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,14,18];

function evenNumbers(numbs) {
  return numbs.filter(num => num % 2 == 0)
}

console.log(evenNumbers(numbers))