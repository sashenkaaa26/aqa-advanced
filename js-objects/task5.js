const users = [
  {name: 'Jane', age : 22 },
  {name: 'Milly', age : 19 },
  {name: 'Kate', age : 20 },
];

for(const user of users){
  const {name, age} = user;
  console.log(`Name: ${name}, Age: ${age}` );
}

//или 2 вариант 
 
// for (const { name, age } of users) {
//   console.log(`Name: ${name}, Age: ${age}`);
// }
