// Funciones declarativas

// asi se declara una funcion
function miFuncionDeclarada(a){
    return
}

function miFuncion(){
    return 3
}


// -----------------------------
function saludar(nombre){

    console.log("Hola " + nombre) 
}
// Invocaciones
saludar("JavaScript") //"Hola JavaScript"
saludar("Platzi") // "Hola Platzi"


//------------------------------
function suma (a,b){
    return a + b
}

// Invocar la  función suma
var resultado1 = suma(2,3)
var resultado2 = suma(4,6)
var resultado3 = suma(10,12)

console.log(resultado1) //5
console.log(resultado2) //10
console.log(resultado3) //22


//Funciones de expresión
// no se declaran variables adentro de una función


var suma = function (a, b) {
    return a + b
  }
  // Invocación
  var resultado = suma(2, 2)
  
  console.log(resultado)

  
//------------------------------
function saludarEstudiantes (estudiante){
    console.log(`Hola ${estudiante}`);
}

saludarEstudiantes("Diego")

var nombre = function(nombre){
    console.log(`Hola ${nombre}`)
}

nombre(`Diego`)


function map(f, a) {
    let result = []; // Create a new Array
    let i; // Declare variable
    for (i = 0; i != a.length; i++)
      result[i] = f(a[i]);
    return result;
  }
  const f = function(x) {
     return x * x * x; 
  }
  let numbers = [0, 1, 2, 5, 10];
  let cube = map(f,numbers);
  console.log(cube);