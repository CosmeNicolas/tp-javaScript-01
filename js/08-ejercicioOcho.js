//Escribe un programa que pida un número y diga si es divisible por 2

let numeroIngresado = parseInt(prompt("Ingrese su numero"));
let divisibleDos = numeroIngresado % 2 ;


if (divisibleDos == 0) {
  alert(numeroIngresado + " es divisible en dos")
} else {
  alert(numeroIngresado + " no es divisible en dos")
}

