// El scope es cada uno de los entornos donde las variables tienen alcance dentro del código de JavaScript

// El scope global es el entorno donde las variables globales pueden ser accedidas desde cualquier lugar de nuestro programa.
// Las variables globales son aquellas que se encuentran declaradas fuera de los bloques de código o funciones

var nombre = "JavaScript"

function saludar(){
    console.log("Hola " + nombre)
}

saludar()

//  la variable nombre está en un scope global

//====================================================

// Ejemplo de lo que es un Scope Global

var miNombre = "Diego"; 

function nombre(usuario) {
    var miNombre = usuario
    console.log(miNombre)
}

nombre();


//-------------------------------------------------------------------------

// El scope local puede ser de función o de bloque.
// Un bloque es toda porción de código que está encerrada entre llaves {}, estos pueden ser los bloques: función, if, else, while, y for.


//Scope global
var nombre = "Diego";

//Scope local
function fun(){
    var apellido = "Arteaga"; //Scope local
    return nombre + " " + apellido;
}

// Ejemplo 2, cómo podemos evitar reescribir el valor de una variable gracias al scope,
var miNombre = "Diego"

function nombre(usuario) {
    var miNombre = usuario;
    console.log(miNombre); 
}

nombre("Oscar");