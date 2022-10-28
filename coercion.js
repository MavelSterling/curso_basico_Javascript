

// La coerción implícita consiste en la transformación de tipos mediante la ayuda de JavaScript. 

console.log(4 + "7") // 47
console.log(4 * "7") // 28
console.log(2 + true)// 3
console.log(false - 3) // -3
console.log(!3) // false


// La coerción explícita es la transformación de tipos de datos que controlamos el resultado

Number("47") // 47
String(51) // "51"
Boolean(1) // true

Number("47") // 'number'
String(51) // 'string'
Boolean(1) // 'boolean'

//-----------------------------------------------

var a = 4 + "7"
typeof a

//Ejemplos de Coerción:

//Convierte a 4 en un string y lo concatena con el "7", por esto regresa un string de valor "47"
var a = 4 + "7"; 

//Convierte al "7" en un número y realiza la operación, por esto devuelve 28
4 * "7"; 

//Aquí concatenamos para convertir la variable a string (coerción implícita)
var a = 20;
var b = a + ""; 
console.log(b); 

//Se obliga a la variable a convertirse en string (coerción explícita)
var c = String(a); 
console.log(c);

//Aquí obligamos a la variable a convertirse en número (coerción explícita)
var d = Number(c); 
console.log(d);


// === Implicit Coercion === 

var a = 20;

var b = a + ""; 

// más ejemplos

var a = [1,2];
var b = [3,4]; 


// === Explicit coercion ===

var c = String( a );

var d = Number( c );

// Otro ejemplo

var a = 30; 
var b = a.toString();

var c = "100"; 
var d = +c; // Unary operator '+' de forma explícita convierte a número

// más ejemplos

var num1 = "3.14"; 
var num2 = 5 + +num1; 