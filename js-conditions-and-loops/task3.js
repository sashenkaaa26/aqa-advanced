//Завдання 3: Генерація таблиці множення

let num = 7;

// For loop

// for(let i = 1; i < 11; i++){
//   let multiplicationTable = num + ' x ' + i + ' = ' + i*num;
//   console.log(multiplicationTable);
// }

//While Loop

let count = 1;
while (count <= 10){
  let multiplicationTable = num + ' x ' + count + ' = ' + count*num;
  console.log(multiplicationTable);
  count++; 
}