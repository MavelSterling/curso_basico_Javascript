// Un objeto es una estructura de datos que permite 
// almacenar valores mediante propiedad - valor a través de 
// la sintaxis de llaves ({}) y separados por comas.

// En las propiedades del objeto es opcional colocar las comillas.
// En el caso de que haya espacios, es obligatorio.

var objeto = {
    clave1: "valor1",
   "clave 2": "valor2",
}
//----------------------------------------------------------------
//----------------------------------------------------------------

// Atributos y métodos

// Los atributos son las variables y los métodos son las funciones propias de cada objeto.

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    "año": 2020,
    detalle: function () {
        console.log("Es un auto")
    }
}

// Las propiedades marca, modelo y "año" son los atributos del objeto miAuto. 
// La propiedad detalle es un método del objeto miAuto.
//----------------------------------------------------------------
//----------------------------------------------------------------

// Acceder a los valores de un objeto:
//----------------------------------------------------------------

// Mediante la notación de corchetes:

// La notación de corchetes ya ese familiar para ti, similar a los arrays, 
// indicamos entre corchetes la propiedad del objeto entre comillas.

// Estructura:
// objeto["propiedad"]


miAuto["marca"] // "Toyota"
miAuto["modelo"] // "Corolla"
miAuto["año"] // 2020
miAuto["detalle"] // ƒ detalle()

miAuto["detalle"]() // "Es un auto"
console.log("--------------------------------")
console.log("--------------------------------")

// -> Si existe la variable y su valor coincide con una propiedad del objeto, entonces mostrará su respectivo valor.
// -> Si existe la variable, pero su valor no coincide con una propiedad del objeto, entonces mostrará undefined.
// -> Si no existe la variable, entonces mostrará un error de referencia.

var propiedad1 = "marca"
miAuto[propiedad1] // "Toyota"

var propiedad2 = "nombre"
miAuto[propiedad2] // undefined

//miAuto[modelo] // ReferenceError: modelo is not defined

//----------------------------------------------------------------
// Mediante la notación de punto:

/* La notación de punto indicamos con un punto la propiedad del objeto. 
Si existen espacios, la única forma de acceder a esa propiedad es mediante la notación de corchetes.*/

// Estructura:
// objeto.propiedad 

miAuto.marca // "Toyota"
miAuto.modelo // "Corolla"
miAuto.añó // 2020
miAuto.detalle // ƒ detalle()

// para ejecutar el método hay que utilizar los paréntesis

miAuto.detalle() // "Es un auto"
console.log("--------------------------------")
console.log("--------------------------------")

//----------------------------------------------------------------

// Los arrays también son objetos

/* La notación punto te debe de parecer familiar, 
 ya que así usábamos los diferentes atributos y 
 métodos de los arrays, como length o map*/

// Los arrays también son objetos en JavaScript.

var array = [1, 2, 3]
array["length"] // 3
console.log("La longitud del array es", array.length) // 3

var newArray = array["map"](function (el) {
  return el * 2
})
console.log(newArray) // [2,4,6]
console.log("--------------------------------")
console.log("--------------------------------")

//----------------------------------------------------------------
/* Para añadir propiedades de un objeto,
 utilizamos la notación de corchetes o de punto 
 con la nueva propiedad, asignándole su respectivo valor.*/

 miAuto["color"] = "rojo"
// o 
miAuto.color = "rojo"

console.log(miAuto)
/* {
  marca: 'Toyota',
  modelo: 'Corolla',
  'año': 2020,
  detalle: ƒ detalle(),
  color: 'rojo'  <---- nueva propiedad
} */
console.log("--------------------------------")
console.log("--------------------------------")

//----------------------------------------------------------------
// Modificar propiedades de un objeto:

// Por ejemplo, modificar la propiedad marca, de "Toyota" a "Ford", del objeto miAuto.

miAuto["marca"] = "Ford"
// o 
miAuto.marca = "Ford"

console.log(miAuto)
/* {
  marca: 'Ford', <--- Cambió de valor
  modelo: 'Corolla',
  'año': 2020,
  detalle: ƒ detalle(),
} */
console.log("--------------------------------")
console.log("--------------------------------")

//----------------------------------------------------------------
// Eliminar propiedades de un objeto

// Para eliminar propiedades de un objeto, 
// se utiliza la palabra reservada delete seguido de la propiedad del objeto.

// Por ejemplo, se elimina la propiedad marca del objeto miAuto.

delete miAuto["marca"]
// o 
delete miAuto.marca

console.log(miAuto)
/* { 
  modelo: 'Corolla', <--- No existe la propiedad marca
  'año': 2020,
  detalle: ƒ detalle(),
} */
console.log("--------------------------------")
console.log("--------------------------------")

// El objeto contexto this

// En JavaScript, el objeto contexto this hace referencia a
// diferentes valores según su contexto de ejecución.

// En objetos, el contexto this hace referencia al propio objeto.
// Esto sirve para acceder a los atributos y métodos propios del objeto.

// Por ejemplo, se cambia la función detalle del objeto miAuto para mostrar un mensaje personalizado.

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    "año": 2020,
    detalle: function () {
        console.log(`Auto ${modelo} del ${año}.`)
    }
}

//miAuto.detalle() //ReferenceError: modelo is not defined
// La función miAuto.detalle() mostrará un error de referencia, que modelo no está definido.

var miAuto = {
    //...
    detalle: function () {
      console.log(`Auto ${miAuto.modelo} del ${miAuto.año}.`)
    },
  }
  
  miAuto.detalle() // 'Auto Corolla del 2020.'
  console.log("--------------------------------")
  console.log("--------------------------------")

  var miAuto = {
    //...
    detalle: function () {
      console.log(`Auto ${this.modelo} del ${this.año}.`)
    },
  }
  
  miAuto.detalle() //'Auto Corolla del 2020.'

  console.log("--------------------------------")
  console.log("--------------------------------")


  var otroAuto = {
    // ...
    detalle: function () {
      console.log(`Auto ${this.modelo} del ${this.año}.`)
    },
  }
  
  otroAuto.detalle() //'Auto Corolla del 2020.'

  //EJEMPLO 

  // Un objeto es una colección de propiedades, y una propiedad es una asociación de key (nombre, o clave) y valores.

var objecto = {}; // Object Literal Syntax 

var miAuto = {
    marca: "Toyota",  // key - value 
    modelo: "Corolla",
    annio: 2020,
    detallesDelAuto: function() {   // Metodo de un objeto (una función dentro de un objeto)
      return `Auto ${this.modelo} ${this.annio}`;
  }
};

miAuto.annio 
miAuto.modelo 

miAuto.detallesDelAuto(); 


// Función constructora 

function auto(marca, modelo, annio) {  // Creas una función con los parametros que va a recibir, 
    this.marca = marca;   // Utilizamos el "this" para asignar valores a las propiedades del objeto 
    this.modelo = modelo;
    this.annio = annio;
}

var newAuto = new auto("Tesla", "Model 3", 2020);

console.log(newAuto.marca)
console.log(newAuto.modelo)