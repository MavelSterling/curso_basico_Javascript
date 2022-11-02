// Truthy y Falsy 
// Son valores que son verdaderos o falsos 

// ----------------------------------------------------------------
// Falsy
// Un valor falsy es aquel que es falso en un contexto booleano, 
// estos son: 0, "" (string vacío), false, NaN, undefined o null.

// Coersión explícita
Boolean(0) // false
Boolean("") // false
Boolean(null) // false
Boolean(undefined) // false
Boolean(NaN) // false
Boolean(false) // false

//----------------------------------------------------------------
// Truthy
// Un valor truthy es aquel que es verdadero en un contexto booleano,
// son todos los valores que no sean falsy

// Coersión explícita
Boolean(12) // true
Boolean("hola") // true
Boolean(true) // true
Boolean([1, 2, 3]) // true
Boolean(function hola() {}) // true
Boolean({ a: 1, b: 2 }) // true

//Ejemplos en los que Boolean devuelve verdadero:
Boolean(1); //true para 1 o cualquier número diferente de cero (0)
Boolean("a"); //true para cualquier caracter o espacio en blanco en el string
Boolean([]); //true aunque el array esté vacío
Boolean({}); //true aunque el objeto esté vacío
Boolean(function(){}); //Cualquier función es verdadera también

// En JavaScript todo valor que no sea falsy es truthy incluyendo las estructuras vacías de array y objetos.

Boolean([]) // true
Boolean({}) // true

// Para que podemos utilizar esto, para generar condiciones segun el valor que demos. 

if(InputEvent.value) {
    //...
}
