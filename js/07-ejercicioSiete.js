//Escribe un programa que pida 3 números y escriba en la pantalla cual es el mayor de los tres.

let numero1 = parseInt(prompt("ingrese el primer numero"));
let numero2 = parseInt(prompt("ingrese el segundo numero"));
let numero3 = parseInt(prompt("ingrese el tercer numero"));
//console.log(numero1, numero2, numero3);


if(numero1 > numero2 && numero1 > numero3) {
 document.write("El primer numero ingresado es el mayor de los tres")
} else if (numero2 > numero3 && numero2 > numero1) {
  document.write("El segundo numero ingresado es el mayor")
} else if (numero3 > numero1 && numero3 > numero2) {
  document.write("el tercer numero es mayor de los tres numeros ingresados")
} else {
  document.write("los numeros ingresados son iguales entre si")
}



