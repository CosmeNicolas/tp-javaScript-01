//Escribe un programa que pida un número y diga si es divisible por 2

let numeroIngresado = parseInt(prompt("Ingrese su numero"));
let divisibleDos = numeroIngresado % 2 ;


if (divisibleDos == 0) {
  alert("es divisible en dos")
} else {
  alert("no es divisible en dos")
}

