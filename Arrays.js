// Un array es una estructura de datos que permite 
// almacenar una serie de datos localizados por índices y separados por comas.


// El índice es la forma en que accedemos a los elementos de los arrays.
// Los índices empiezan desde 0, es decir, la primera posición es el índice 0.
// Un array se inicia mediante la sintaxis de corchetes [] y es tipo de dato objeto.

var array = [1,2,3,4]

// array[índice]

var longitud = array.length
console.log("La longitud del array es:",longitud) // 4

//----------------------------------------------------------------
console.log('-----------------------------------------------------')
var nombres = ["Andres", "Ramiro", "Silvia"]
console.log("Array nombres es",nombres)
console.log('-----------------------------------------------------')

console.log("índice 0 es el nombre:",nombres[0]) // "Andres"
console.log("índice 1 es el nombre:",nombres[1]) // "Ramiro"
console.log("índice 2 es el nombre:",nombres[2]) // "Silvia"
console.log("índice 3 es el nombre:",nombres[3]) // undefined

console.log('-----------------------------------------------------')
console.log('-----------------------------------------------------')

var nombres = ["Andres", "Ramiro", "Silvia"]
// Accedemos y mutamos el segundo elemento
nombres[1] = "Platzi"

console.log(nombres) // ["Andres", "Platzi", "Silvia"]

console.log('-----------------------------------------------------')
console.log('-----------------------------------------------------')
// ----------------------------------------------------------------

// Método push

// El método push agrega uno o varios elementos al final del array original.
// El método recibe como argumento los valores a agregar. 
// Retorna el número de elementos del array mutado.

var array = [1,2,3]
array.push(4,5)
console.log(array) // [ 1, 2, 3, 4, 5 ]

var frutas = ["Manzana", "Plátano", "Cereza", "Fresas"];

var masFrutas = frutas.push("Uvas"); // Esté metodo añadirá "Uvas" añ final del array
 console.log(frutas);

console.log('-----------------------------------------------------')
console.log('-----------------------------------------------------')

// Método unshift

// El método unshift agrega uno o varios elementos al inicio del array original.
// El método recibe como argumento los valores a agregar. 
// Retorna el número de elementos del array mutado.

var array = [3,4,5]

array.unshift(1,2) // agrega al inicio del array mutado
console.log(array) // [ 1, 2, 3, 4, 5 ]

var nuevaLogitud = frutas.unshift("Uvas"); // Añade "Uvas" al inicio 
console.log(frutas);

console.log('-----------------------------------------------------')
console.log('-----------------------------------------------------')

// Método pop

// El método pop extrae el elemento del final del array original.

var array = [1,2,3,4]
var lastElement = array.pop() // se extrae el último elemento

console.log("El último elemento del array",lastElement) // 4
console.log(array) // [ 1, 2, 3 ] -> Arroja el array sin el último elemento

var utlimo = frutas.pop("Uvas"); // Eliminará "Uvas" del final 
console.log(frutas);

console.log('-----------------------------------------------------')
console.log('-----------------------------------------------------')

// Método shift

// El método shift extrae el elemento del inicio del array original.

var array = [1,2,3,4]
var firstElement = array.shift()

console.log(firstElement) // 1 -> el primer elemento del array original
console.log(array) // [ 2, 3, 4 ] ->  arroja el array sin el primer elemento

var borrarFruta = frutas.shift("Manzana"); // Elimina "Manzana" del inico
console.log(frutas);

console.log('-----------------------------------------------------')
console.log('-----------------------------------------------------')


// Método indexOf

// El método indexOf muestra el índice del elemento especificado como argumento.

var array = [1,2,3,4]
var index = array.indexOf(2) // -> el indice el segundo elemento 2

console.log(index) // 1

// Si el elemento no se encuentra en el array, el método devuelve el valor -1.

var array = [1,2,3,4]
var index = array.indexOf("hola")
console.log(index) // -1

var posicion = frutas.indexOf("Platano"); // te dará la posición de ese item en el array
console.log(frutas);
console.log('-----------------------------------------------------')
console.log('-----------------------------------------------------')

// Quiz

// se recibe un parámetro arraySecreto en la función solution. 
// Debes retornar true si el primer elemento del arraySecreto es de tipo string y 
// debes retornar false si es de cualquier otro tipo.

export function solution(arraySecreto) {
    if (typeof arraySecreto[0] === "string") {
      return true;
    } else {
      return false;
    }
  
  }
solution(["Huevo", "Gallina", "Vaca"]) // true
solution([1, "Gallina", "Vaca"]) // false


// Eliminando elementos de un Array

// El método .push() nos permite agregar uno o más elementos al final de un array.

// Array inicial
let txtArray = ["Ana","Juan","Diego","Laura"]

//Función

function addCharacters(){
  // Se agrega elementos
  txtArray.push("Chris","María")
  // Se revisa el array que ahora tiene los números agregados
  console.log(txtArray)
}

addCharacters() 

// array. .shift() eliminar el primer elemento de un array, es decir,
// elimina el elemento que esté en el índice 0.

// --- SHIFT ---

//Creamos el array
let array = [1,2,3,4,5]
console.log(array)

// Aplicamos .shift()
let shiftArray = array.shift()

//Revisamos. El output debe de ser [2,3,4,5]
console.log(array)

// --- POP ---

//Creamos el array
let array1 = [1,2,3,4,5]
console.log(array1)

// Aplicamos .shift()
let shiftArray1 = array1.pop()

//Revisamos. El output debe de ser [1,2,3,4]
console.log(array1)

// Playground: Arregla el Bug
/*
En este desafío debes ayudarnos a arreglar la función solution.

Esta recibe un array cars y debería retornar 
el array filtrado únicamente con los objetos que tengan 
la propiedad licensePlate.

Pero no está funcionando.

La función solo devuelve un objeto con el primer elemento que 
cumple los requisitos, no estamos recibiendo los demás elementos del array 
que también deberían pasar el filtro.


*/


export function solution(cars) {
  return cars.filter(function (car) {
    if (car.licensePlate) {
      return true;
    } else {
      return false;
    }
  });
}

const cars = [
  {
    color: 'red',
    brand: 'Kia',
  },
  {
    color: 'gray',
    brand: 'Chevrolet',
    licensePlate: 'AAA111',
  },
  {
    licensePlate: 'RGB255',
  },
];

solution(cars);

/* Retorna
[
  {
    color: 'gray',
    brand: 'Chevrolet',
    licensePlate: 'AAA111',
  },
  {
    licensePlate: 'RGB255',
  },
]
*/