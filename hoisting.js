// Hoisting es un término para describir que las declaraciones de variables y 
// funciones son desplazadas a la parte superior del scope más cercano, scope global o de función.

// Hoisting en variables declaradas con var

// Hoistin: Declara y asigna undefined
var nombre = undefined
console.log(nombre) // undefined
nombre = "Andres";

// Hoisting en funciones

console.log( saludar() )

function saludar() {
  return "Hola"
}

// Hoisting: Declara la función antes de ser invocada
function saludar() {
    return "Hola"
  }
  
  console.log( saludar() ) // "Hola"

  //================================================

  // ERROR -  no arroja miNombre, no esta definida
  //console.log(miNombre);
  //var miNombre = "Diego";

  //CORRECTO - porque esta definida
  var miNombre = "Diego";
  console.log(miNombre);

  // Lo que sucede con el hoisting

var miNombre = undefined;

console.log(miNombre + "soy hoisting");

miNombre = "Diego";


// ===  Hoisting con funcionts  ===

hey();

function hey() {
    console.log('Hola ' + miNombre);
};

var miNombre = 'Diego';

// Lo que sucede con hoisting 

function hey() {  //La función se declara hasta arriba, y después se declaran las variables.
    console.log('Hola ' + miNombre);
};

var miNombre;

hey();

//---------------------------------
// Ejemplo

saludo();

function saludo() {
    console.log("Hola " + nombre);
}

var nombre = "Smith";

saludo();

//------------
function saludo() {
    console.log("Hola " + nombre);
}

var nombre = "Smith";

//-----------------------
var nombre = "Smith";

function saludo() {
    console.log("Hola " + nombre);
}

saludo();


