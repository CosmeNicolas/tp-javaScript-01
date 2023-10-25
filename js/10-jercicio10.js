/* 
10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
Ejemplo: 

input: 20


Output: El 20 es divisible por 2.

*/ 

let numeroDiv = parseInt(prompt('Ingrese un numero'));
let resultado = numeroDiv % 2
console.log(resultado)

if(numeroDiv % 2 == 0) {
  document.write(`El numero ${numeroDiv} es divisible por 2`)
} else if(numeroDiv % 3 == 0) {
  document.write(`El numero ${numeroDiv} es divisible en 3`)
} else if(numeroDiv % 5 == 0){
  document.write(`El numero ${numeroDiv} es divisible en 5 `)
} else if (numeroDiv % 7 == 0) {
  document.write(`El numero ${numeroDiv} es divisible en 7`)
} else {
  document.write(`El numero ${numeroDiv} no es divisible por 2, 3, 5 y 7`);
}

