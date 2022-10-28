// Hoisting es un término para describir que las declaraciones de variables y 
// funciones son desplazadas a la parte superior del scope más cercano, scope global o de función.

// Hoisting en variables declaradas con var

// Hoistin: Declara y asigna undefined
var nombre = undefined
console.log(nombre) // undefined
nombre = "Andres"

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