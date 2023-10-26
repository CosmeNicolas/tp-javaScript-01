/*11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
Ejemplo: 

input: 20
input: 210

Output: El 20 es divisible por 2 y por 5.
Output: El 210 es divisible por 2, por 3, por 5 y por 7.
 */

let numeroDiv = parseInt(prompt('Ingrese un numero'));



  //const element = array[index];
  if (numeroDiv % 2 == 0 && numeroDiv % 3 == 0 && numeroDiv % 5 == 0 && numeroDiv % 7 == 0) {
      console.log(`El numer ${numeroDiv} es divisible por 2 , 3 , 5 y 7`)
  }   else if (numeroDiv % 3 == 0 && numeroDiv % 5 == 0 && numeroDiv % 7 == 0 ){
      console.log('es divisible en 3, 5 y 7')
  }   else if (numeroDiv % 5 == 0 && numeroDiv % 7 == 0){
      console.log(`El numero ${numeroDiv} es divisible en 5 y 7`)
  }   else if(numeroDiv % 2 == 0 && numeroDiv % 3 == 0 ) {
      console.log(`El numero ${numeroDiv} es divisible por 2 y 3`)
  }   else if(numeroDiv % 3 == 0 && numeroDiv % 5 == 0) {
      console.log(`El numero ${numeroDiv} es divisible en 3 y 5`)
  }   else if(numeroDiv % 5 == 0 && numeroDiv % 7 == 0){
      console.log(`El numero ${numeroDiv} es divisible en 5  y 7`)
  }   else if (numeroDiv % 7 == 0 && numeroDiv % 3 == 0) {
      console.log(`El numero ${numeroDiv} es divisible en 7 y 3`)
    } else if (numeroDiv % 2 == 0 && numeroDiv % 5 == 0 && numeroDiv % 3 == 0 ){
      console.log(`el numero ${numeroDiv} es divisible en 2, 5 y 3`)
    } else if(numeroDiv % 2 == 0 && numeroDiv % 5 == 0){
      console.log(`El numero ${numeroDiv} es divisible en 2 y 5`)
    }
      else if(numeroDiv % 2 == 0) {
      console.log(`El numero ${numeroDiv} es divisible por 2 y en si mismo`)
    } else if(numeroDiv % 3 == 0) {
      console.log(`El numero ${numeroDiv} es divisible en 3 y en si mismo`)
    } else if(numeroDiv % 5 == 0){
      console.log(`El numero ${numeroDiv} es divisible en 5 y en si mismo`)
    } else if (numeroDiv % 7 == 0) {
      console.log(`El numero ${numeroDiv} es divisible en 7 y ensi mismo`)
    } else if (numeroDiv % numeroDiv == 0) {
      console.log('es divisible en si mismo')
    } else {
      console.log(`El numero ${numeroDiv} no es divisible por 2, 3, 5 y 7`);
    }
  





