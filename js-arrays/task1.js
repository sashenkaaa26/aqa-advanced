const numbers = [2, -5, 0, 7, -3, 0, 10, -8, -4,-2,0];
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for(let i = 0; i < numbers.length; i++){
  if(numbers[i] > 0){
    positiveCount+=1;
  }else if( numbers[i] < 0){
    negativeCount+=1;
  }else if( numbers[i] == 0){
    zeroCount +=1;
  }

}

//вариант  с for of 

// for (const num of numbers) {
//   if (num > 0) {
//       positiveCount++;
//   } else if (num < 0) {
//       negativeCount++;
//   } else {
//       zeroCount++;
//   }
// }
console.log('Кількість позитивних чисел:', positiveCount);
console.log('Кількість негативних чисел:', negativeCount);
console.log('Кількість нульових чисел:', zeroCount);