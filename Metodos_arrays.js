// Existen métodos de arrays para recorrerlos, y devolver un valor o un array con nuevos resultados. 
// Entre estos están dos muy importantes: map y filter.

// el siguiente array de objetos para los ejemplos de los métodos:

var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
  ]

console.log(articulos)
console.log("--------------------------------")
console.log("--------------------------------")

//----------------------------------------------------------------
// El método filter

/* El método filter consiste en crear un nuevo array a partir de los elementos originales 
filtrados mediante una función (callback) que indica la condición a cumplir y es inmutable. 
Si la condición se cumple, retorna el elemento completo.*/

/*
El método filter recibe dos argumentos:

-> La función que itera y evalúa si cada elemento del array 
   si cumple con la condición especificada (obligatorio).

-> Un objeto al que puede hacer referencia el contexto this en la función. 
   Si se lo omite, será undefined. Recuerde que this es diferente según el lugar donde sea invocado.
*/

// var otherArray = array.filter(function(), thisArg)

/* 
La función, que recibe como argumento el método filter, utiliza tres parámetros:

-> El valor actual del elemento iterado. 
   Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.

-> El índice del elemento iterado.
   Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.

-> El array que está iterando.

const other = array.filter(function(element, index, array))

*/

/* Válida si es un true o false para poder meterlos al nuevo array, 
y éste método no modifica el array original */

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500  /* Menor o igual a 100 */ 
});

console.log(articulosFiltrados);
  /* [
    { nombre: 'Libro', costo: 320 },{ nombre: 'Teclado', costo: 500 }
  ] */
  console.log("--------------------------------")
  console.log("--------------------------------")

//----------------------------------------------------------------
 
 // El método map

 // El método map es inmutable y consiste en crear un nuevo array a partir 
 // de los elementos originales transformados mediante una función (callback).


 /*
El método map recibe dos argumentos:

-> La función que itera y transforma cada elemento del array (obligatorio).

-> Un objeto al que puede hacer referencia el contexto this en la función. 
   Si se lo omite, será undefined. Recuerde que this es diferente según el lugar donde sea invocado.

   var otherArray = array.map(function(), thisArg)

 */

/*
La función, que recibe como argumento el método map, utiliza tres parámetros opcionales:

-> El valor actual del elemento iterado. 
   Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.

-> El índice del elemento iterado. 
   Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.

-> El array que está iterando.

   var otherArray = array.map(function(element, index, array))
*/

var nombreArticulos = articulos.map(function (articulo) {
  return articulo.nombre
})
console.log(nombreArticulos)

/* Retorna: 
[ 'Bici', 'TV', 'Libro', 'Celular', 'Laptop', 'Teclado', 'Audifonos' ]
*/
console.log("--------------------------------")
console.log("--------------------------------")

//----------------------------------------------------------------
//   Metodo Find

 /* El método find consiste en encontrar el primer elemento de un array 
   que cumpla con la condición especificada en la función (callback). 
   Si ningún elemento cumpla con la condición, retornará undefined.

El método find recibe dos argumentos:

-> La función que itera y evalúa cada elemento del array hasta 
   encuentre uno que cumpla con la condición especificada (obligatorio).

-> Un objeto al que puede hacer referencia el contexto this en la función.
   Si se lo omite, será undefined.


   array.find(function(), thisArg)

La función, que recibe como argumento, utiliza tres parámetros opcionales:

 -> El valor actual del elemento iterado. 
    Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.

 -> El índice del elemento iterado. 
    Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.

 -> El array que está iterando.

*/

 var encuentraArticulos = articulos.find(function(articulo){
    return articulo.nombre === 'laptop';
});

console.log(encuentraArticulos);
/* Retorna:
{ nombre: 'Laptop', costo: 3000 }
*/
console.log("--------------------------------")
console.log("--------------------------------")


//----------------------------------------------------------------
//   Metodo forEach

/*
El método forEach de los arrays consiste en ejecutar una función (callback) 
para cada uno de los elementos iterados. Iterar significa repetir una acción varias veces. 
Este método no retorna ningún valor.

Este método recibe dos argumentos:

-> La función que itera cada elemento del array (obligatorio).
-> Un objeto al que puede hacer referencia el contexto this en la función.
   Si se lo omite, será undefined.

  array.forEach(function(), thisArg)

La función, que recibe como argumento el método forEach, utiliza tres parámetros opcionales:

-> El valor actual del elemento iterado.
   Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.

-> El índice del elemento iterado. 
   Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.

-> El array que está iterando.

array.forEach(function(element, index, array))
*/

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});
console.log("--------------------------------")
console.log("--------------------------------")


//----------------------------------------------------------------
//   Metodo Some
/* Este método nos regresa un false o un true para validar si hay o no artículos que cumplan la validación */

/*
El método somees inmutable y consiste retornar un valor lógico verdadero 
si existe al menos un elemento que cumpla la condición establecida en la función (callback).

El método some recibe dos argumentos:

-> La función que itera y evalúa cada elemento del array 
   hasta que al menos uno cumpla con la condición especificada (obligatorio).

-> Un objeto al que puede hacer referencia el contexto this en la función. 
   Si se lo omite, será undefined.

   array.some(function(), thisArg)

La función, que recibe como argumento el método some, utiliza tres parámetros:

-> El valor actual del elemento iterado. 
   Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.

-> El índice del elemento iterado. 
   Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.

-> El array que está iterando.

   array.some(function(element, index, array))
*/

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

console.log(articulosBaratos); 
console.log("--------------------------------")
console.log("--------------------------------")

//----------------------------------------------------------------
// Metodo Every

/* Este método checa que todos los elementos en el array cumplan con la validación que ponemos, y al final nos regresa un true o un false */

var articulosBaratos = articulos.every(function(articulo){
    return articulo.costo <= 700;
});

console.log(articulosBaratos);
console.log("--------------------------------")
console.log("--------------------------------")



//----------------------------------------------------------------
//  Metodo Reduce
/* Este método corre una función en cada elemento del array, para comenzar a sumar los costos de cada elemento. */

var costoTotal = articulos.reduce(function(totalActual, articulo){
    return articulo.costo + totalActual;
}, 0); // El 0 será la cantidad inicial con la que comenzará el totalActual

console.log(costoTotal); 

//----------------------------------------------------------------
// Metodo Includes

var numeros = [1, 2, 3, 4, 5, 6];

var incluyeNumero = numeros.includes(2); 

console.log(incluyeNumero);
console.log("--------------------------------")
console.log("--------------------------------")

//----------------------------------------------------------------
//----------------------------------------------------------------
// EJEMPLO:
var articulos = [
	{ nombre: '📱', precio: 1000 },
	{ nombre: '💻', precio: 1500 },
	{ nombre: '🖥', precio: 2000 },
	{ nombre: '⌨️', precio: 100 },
	{ nombre: '🖱', precio: 70 },
	{ nombre: '🚗', precio: 30000 },
];

// Método Filter
var articulosFiltrados = articulos.filter(function(articulo) {
	return articulo.precio <= 500;
});

// Método Map
var nombreArticulos = articulos.map(function(articulo) {
	return articulo.nombre;
});

console.log(articulosFiltrados);
// (2) [{…}, {…}]
//   0: {nombre: "⌨️", precio: 100}
//   1: {nombre: "🖱", precio: 70}
console.log("--------------------------------")
console.log("--------------------------------")


console.log(nombreArticulos); // Retorna (5) ["📱", "💻", "🖥", "⌨️", "🚗"]
console.log("--------------------------------")
console.log("--------------------------------")
