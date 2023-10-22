//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor
let numero1 = prompt("ingrese el primer número");
let numero2 = prompt("ingrese el segundo número");

if(numero1 >= numero2){
  document.write("el primer numero ingresado " + numero1 + ", es mayor que el segundo numero ingresado");
} else {
  document.write("el segundo numero ingresado " + numero2 + ", es mayor que el primer numero ingresado")
}