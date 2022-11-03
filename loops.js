// Un bucle (loop) o ciclo repetitivo es una estructura de control que 
// te permite realizar una o varias instrucciones mientras una condición sea verdadera.
//----------------------------------------------------------------

// Ciclo for
// Para el ciclo for conocemos la cantidad de veces que la estructura repetirá una o varias instrucciones.

// Estructura:

//for (condición) {
    // Bloque de código
//}

// La condición consta de tres partes:

// - Inicio: se debe inicializar una variable que será evaluada en la expresión a comparar. 
//           Esta variable puede ser declarada dentro o fuera de la condición.

// - Comparación: es una expresión que debe cumplir la variable inicial, 
//                cuando no se cumpla, el ciclo termina.

// - Pasos: son los intervalos que cambiará la variable inicial, 
//          mientras cumpla con la expresión de comparación.

// Cada una de las partes debe estar separada por un punto y coma ( ;)

//---------------------------------------------------------------

// EJEMPLO : Generar los números de 1 al 10

for (var num = 1; num <= 10; num++) {
    console.log(num)
  }
  console.log('-----------------------------------------------------')
  console.log('-----------------------------------------------------')

// -  Inicio: inicializamos una variable con el valor de 1, 
//            generalmente se utiliza i (índice) como variable para el bucle, pero no es obligatorio. 
//            En este caso usaremos var num = 1.

// - Condición: La condición será mientras sea menor o igual que 10 (num <= 10)

// - Pasos: Debemos aumentar la variable en una unidad, por lo tanto,  
//           podemos utilizar num = num +1, num += 1 o num++.
//            Este último únicamente cuando la variable aumente una unidad.

// Ejemplo 2:

var nombres = ["Andres", "Diego", "Platzi", "Ramiro", "Silvia"]

for(var i = 0; i < nombres.length; i++){
    console.log(nombres[i], "Posición", i )
}
console.log('-----------------------------------------------------')
console.log('-----------------------------------------------------')

//---------------------------------------------------------------
// Ciclo for ... of
// El ciclo for ... of es una variación del ciclo for que se utiliza 
// para recorrer los valores de los elementos de un array.


// Estructura:

// for ( var elemento of array){
       //Bloque de código
//}

// La variable elemento es la referencia a cada uno de los elementos del array. 
// Este puede tener cualquier nombre, por eso se inicia con var, 
// debido a que es una variable como el índice i en el bucle for.

var array = [5, 4, 3, 2, 1]

for (var elemento of array) {
  console.log(elemento) // retorna 5 4 3 2 1
}
console.log('-----------------------------------------------------')
console.log('-----------------------------------------------------')

// --------------------------------------------------------------

// Por convención, se escribe la variable elemento en singular con respecto al nombre del array

// for (var dato of datos) { ... }
// for (var name of names) { ... }
// for (var number of numbers) { ... }
// for (var el of elements) { ... }

// El ciclo for ... of solo accede al valor de cada uno de los elementos del array. 
//  Para duplicar el valor de cada elemento del array, se necesita su índice.
var numbers = [5, 4, 3, 2, 1]

// ❌ No cambia el array original
for (var number of numbers) {
    number = number * 2
  }
  
console.log(numbers) // [5, 4, 3, 2, 1]
console.log('-----------------------------------------------------')
console.log('-----------------------------------------------------')


// ✅ Cambia el array original, cada elemento por 2
for(var i=0; i < numbers.length; i++){
    numbers[i] = numbers[i] * 2
}

console.log(numbers) // [ 10, 8, 6, 4, 2 ]
console.log('-----------------------------------------------------')
console.log('-----------------------------------------------------')


// Una forma de solucionar el anterior problema utilizando for ... of,
// es creando otro array vacío para llenarlo con los nuevos valores, 
// de esta manera no cambiará el array original.

var numbers = [5, 4, 3, 2, 1]
var duplicates = []

for (var number of numbers) {
  duplicates.push(number * 2)
}

console.log(duplicates) // [ 10, 8, 6, 4, 2 ]

// Ejemplo

var estudiantes = ["Maria", "Sergio", "Rosa"];

function saludarEstudiantes(estudiante){
	console.log(`Hola ${estudiante}`);
}

console.log('-----------------------------------------------------')
console.log('-----------------------------------------------------')

for (var i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
}

console.log('-----------------------------------------------------')
console.log('-----------------------------------------------------')


//forEach method
estudiantes.forEach(estudiante => saludarEstudiantes(estudiante));
console.log('-----------------------------------------------------')
console.log('-----------------------------------------------------')

//for in loop - itera sobre los indices del array

for(let estudiante in estudiantes){
	saludarEstudiantes(estudiantes[estudiante]);
}
console.log('-----------------------------------------------------')
console.log('-----------------------------------------------------')


//for-of - A diferencia de for-in este itera sobre los valores asignados a cada indice
for(let estudiante of estudiantes){
	saludarEstudiantes(estudiante);
}
console.log('-----------------------------------------------------')
console.log('-----------------------------------------------------')

// Ciclo while

// Para el ciclo while no conocemos la cantidad de veces que la estructura repetirá una o varias instrucciones. 
// Aunque también se puede acoplar para que realice un determinado número de repeticiones.

// La estructura del ciclo while

// while (condición) {
    // Bloque de código
    // Cambiar la condición para salir del bucle
// }

// EJEMPLO: Generación de números con el bucle while

var numero = 1

while ( numero <= 10 ){
    console.log(numero)
    numero++
}
console.log('-----------------------------------------------------')
console.log('-----------------------------------------------------')


// Mientras (while) la variable numero sea menor o igual que 10 (numero <= 10) ejecuta una o varias instrucciones (console.log); 
// finalmente, aumenta la variable en uno (numero++) para que no exista un bucle infinito

var edad = Number(prompt("Ingrese un valor: "))

while (edad > 18 || edad <= 0){
  edad = Number(prompt("Ingrese un valor correcto: "))
}

console.log("Gracias por ingresar al programa")