// Estructuras de Control

// Condicional if 
// -> Un condicional evalúa si una expresión o condición es verdadera

// Ejemplo: 
var edad= 40

if (edad >= 18){
    console.log("Puedes conducir, su edad es", edad)
}


if (edad >= 18){
    console.log("Puedes conducir, su edad es", edad)
} else {
    console.log("No puedes conducir, su edad es", edad)
}

// EXPLICACIÓN:
//  si (if) una acción (expresión) es verdadera (true) 
// hago una acción (bloques de código)
// En el caso contrario (else) efectúo otra acción.

// Estructura del if:
// if (condicion1){
    // Bloque 1
 // } else if (condicion2){
     // Bloque 2
 // } else if (condicion3){
    // Bloque 3
//  } else {
     // Bloque else
// }


//  un cliente solicita un descuento según el número de artículos que ha comprado,
//  la tienda ofrece 3 descuentos: 10% si ha comprado más de 5 artículos, 
// 15% si son más de 10 artículos, y todo por encima de 15 artículos recibe un 20% de descuento.

var precio = 10 
var articulos = 10

if (articulos >= 5 && articulos < 10){
   precio = precio * (1-0.10)

} else if (articulos >= 10 && articulos < 15){
    precio = precio * (1-0.15)

} else {
    precio = precio * (1-0.20)
}

console.log(precio)

// Con función - Determinar si es par o impar 

function esPar(numero){
    return  resultado = numero % 2 === 0 ? "Es par" : "No es par"
}

esPar(2) // "Es par"
esPar(3) // "No es par"

var esUsuario = false; 

if(esUsuario) {
    console.log('Tiene acceso al contenido'); 
} else {
    console.log('Tienes que crear una cuenta para poder acceder al contenido');
}


// Ejemplo de cómo se utiliza el else if

var edad = 18; 
var accion;  

if(edad === 18) {
    accion = 'Puede votar, será su 1ra votación'
} else if(edad > 18) { 
    accion = 'Puede votar'
} else { // call back 
    accion = 'Aun no puede votar'
}

console.log(accion)

// Operador ternario

// condicion ? Bloque verdadero : Bloque falso

var numero = 1; 
var resultado   

if(numero === 1) {
    resultado = 'Sí son un 1'; 
} else {
    resultado = 'No soy un 1'; 
}

//condition ? true : false; 

var numero = 1; 
var resultado = numero === 1 ? 'Sí son un 1' : 'No soy un 1';

console.log(resultado);

//----------------------------------------------------------------
// JUEGO PIEDRA, PAPEL o TIJERA

var papel = "papel"
var piedra = "piedra"
var tijera = "tijera"

var resultado_juego = function( jugador, maquina){
if (jugador == "papel"  && maquina == "piedra") 
{
    console.log("¡Ganaste!");
}
else if (jugador == "tijeras"  && maquina == "papel") 
{
    console.log("¡Ganaste!");
}
else if (jugador == "Piedra"  && maquina == "tijeras") 
{
    console.log("¡Ganaste!");
}
else if (jugador == "Piedra"  && maquina == "Piedra" ) 
{
    console.log("empate");
}else if (jugador == "tijeras"  && maquina == "tijeras" ) 
{
    console.log("empate");
}else if (jugador == "papel"  && maquina == "papel" ) 
{
    console.log("empate");
}
else {
    console.log("Perdiste")
}
}

resultado_juego(papel,piedra)