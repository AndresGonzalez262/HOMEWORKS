//HOMEWORK

/*
Funciones de Iteración y Transformación

forEach(callback): Itera sobre cada elemento del array.

map(callback): Crea un nuevo array transformando cada elemento.

filter(callback): Retorna un nuevo array con los elementos que cumplen una condición.

reduce(callback, valorInicial): Reduce los elementos a un solo valor.

find(callback): Devuelve el primer elemento que cumple una condición.

findIndex(callback): Devuelve el índice del primer elemento que cumple una condición.

Funciones de Modificación

push(elemento): Agrega un elemento al final.

pop(): Elimina el último elemento.

shift(): Elimina el primer elemento.

unshift(elemento): Agrega un elemento al inicio.

splice(inicio, cantidad, elementosNuevos): Agrega o elimina elementos en una posición específica.

Funciones de Ordenamiento y Búsqueda

sort(callback): Ordena los elementos del array.

reverse(): Invierte el orden de los elementos.

includes(valor): Verifica si un valor está en el array.

indexOf(valor): Devuelve el índice de un valor en el array.

lastIndexOf(valor): Encuentra la última aparición de un valor en el array.

Funciones de Combinación y División

concat(array): Une dos arrays.

join(separador): Convierte el array en una cadena de texto.

slice(inicio, fin): Extrae una parte del array sin modificar el original.

split(separador): Divide un string en un array de elementos.

*/ 
const numbers = [1, 2, 3, 4, 5];

// forEach
numbers.forEach(num => console.log(num));

// map
const squared = numbers.map(num => num * num);
console.log(squared);

// filter
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// reduce
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

// find
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven);

// findIndex
const indexFirstEven = numbers.findIndex(num => num % 2 === 0);
console.log(indexFirstEven);

// push & pop
numbers.push(6);
console.log(numbers);
numbers.pop();
console.log(numbers);

// shift & unshift
numbers.shift();
console.log(numbers);
numbers.unshift(0);
console.log(numbers);

// sort
const randomNumbers = [4, 2, 9, 1];
randomNumbers.sort((a, b) => a - b);
console.log(randomNumbers);

// reverse
randomNumbers.reverse();
console.log(randomNumbers);

// includes
console.log(numbers.includes(3));

// indexOf
console.log(numbers.indexOf(3));

// lastIndexOf
const duplicates = [1, 2, 3, 2, 1];
console.log(duplicates.lastIndexOf(2));

// concat
const moreNumbers = [6, 7, 8];
const combined = numbers.concat(moreNumbers);
console.log(combined);

// join
console.log(numbers.join("-"));

// slice
console.log(numbers.slice(1, 3));

// split
const sentence = "Hola mundo";
console.log(sentence.split(" "));