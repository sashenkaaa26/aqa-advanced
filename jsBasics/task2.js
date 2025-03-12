//Завдання 2: Конкатенація радків та шаблонний рядок

let name1 = 'Sasha';
let name2 = 'Dasha';

let greeting = 'Hello, ' + name1 + ' and ' + name2 + '.' + ' Nice to see you!' ;
console.log(greeting);

let greetingTemplate = `Hello, ${name1} and ${name2}. Nice to see you! `;

console.log(greetingTemplate);