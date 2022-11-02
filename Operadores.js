// Operadores aritméticos

//----------------------------------------------------------------
// ARITMETICOS
var a = 2
var b = 4
a + b // Suma a + b,  afirmación unitaria +a : Positivo, concatenación "a" + "la" : "ala"
a - b// Resta a - b, negación unitaria -a : Negativo
a * b // Producto 
a / b // Divisor 
a % b // Residuo 
a ** b // Potencia, a elevado a b
a++ // Incremento (suma uno) a++ : a = a + 1
a-- // Decremento (resta uno) a-- : a = a - 1

//----------------------------------------------------------------
// Ejemplos:
// Suma
suma = 2 + 3 // 5
console.log("Suma 2 + 3 es",suma)

// Resta
resta = 5 - 3 // 2
console.log("Resta 5-3 es",resta)

// Multiplicación
multiplicacion = 4 * 2 // 8
console.log("Multiplicacion de 4*2 es",multiplicacion)

// División
division = 6 / 2 // 3
console.log("Division 6/2 es",division)

//Residuo
residuo = 21 % 5 // 1
console.log("Residuo de 21 % 5 es",residuo)


var a1= 3
var b1= 3

console.log("Valores de las variables", "a1:", a1, "b1:", b1)

// el valor de la variable aumenta, pero devuelve el valor anterior.
console.log("++ despues de la variable: ",a1++) //3

// el valor de la variable aumenta y devuelve el valor actual
console.log("++ antes de la variable: ",++b1) //4

console.log(a1) //4
console.log(b1) //4

//----------------------------------------------------------------
// ASIGNACIÓN

a = b // Asignación a = b
a += b // Asignación de adición  a += b : a = a + b
a -= b // Asignación de sustracción  a -= b : a = a - b
a *= b // Asignación de multiplicación  a *= b : a = a * b
a /= b // Asignación de división  a /= b : a = a / b
a %= b// Asignación de residuo  a %= b : a = a % b
a **= b// Asignación de potencia  a **= b : a = a ** b
a <<= b // Asignación de desplazamiento a la izquierda  a <<= b : a = a << b
a >>= b // Asignación de desplazamiento a la derecha  a >>= b : a = a >> b
a >>>= b // Asignación sin signo de desplazamiento a la derecha  a >>>= b : a = a >>> b
a &= b// Asignación AND  a &= b : a = a & b
a ^= b // Asignación XOR  a ^= b : a = a ^ b
a |= b // Asignación OR  a |= b : a = a | b

// Ejemplo de concatenación:
frase = "Hola"+ " " + "Platzi" // "Hola Platzi"
console.log(frase) 

// Ejemplo de asignación:
var saludo = "Hola Mundo"
console.log(saludo)

// Ejemplo de asignación combinada:
var contador = 1
console.log("Valor incial de la variable:",contador)
contador = contador + 1
contador = contador + 1

console.log("Despues de incrementar 1 la variable dos veces:",contador) // 3

var contar = 1

contar += 2 // aumenta dos veces
contar -= 1 // disminuye uno
contar *= 5 // se multiplica por 5
contar /= 2 // se divide por 2

console.log("Resultado final de las operaciones:", contar)

var edad = 40;
edad++; //el valor de edad se va incrementar en uno.
edad += 2; // el valor de edad va incrementar en dos.
console.log(edad)

//----------------------------------------------------------------
// COMPARACIÓN

a == b // Igualdad a == b, a tiene el mismo valor que b
a != b// Distinto a != b, a tiene un valor diferente a b
a === b// Identidad a === b igual valor igual tipo de dato
a !== b // Sin Identidad a !== b igual valor o igual tipo de dato
a > b// Mayor que a > b
a >= b // Mayor o igual que a >= b
a < b// Menor que a < b
a <= b // Menor o igual que a <= b


//Igualdad
igualdad = "3" == 3 // true
console.log("Igualdad '3' == 3 ",igualdad)
igualdad1 = 3 == 3 // true
console.log("Igualdad 3 == 3 ",igualdad1)

// Igualdad estricta
igualdad_estricta = "3" === 3 // false
console.log("Igualdad estricta '3' === 3 ",igualdad_estricta)
igualdad_estricta1 = 3 === 3 // true
console.log("Igualdad estricta 3 === 3 ",igualdad_estricta1)

//Desigualdad
desigualdad = "3" != 3 // false
console.log("Desigualdad '3' !== 3 ",desigualdad)
desigualdad1 = 3 != 3 // false
console.log("Desigualdad 3 != 3",desigualdad1)

// Desigualdad estricta
desigualdad_estricta = "3" !== 3 // true
console.log("Desigualdad estricta '3' !== 3 ",desigualdad_estricta)
desigualdad_estricta1 = 3 !== 3 // false
console.log("Desigualdad estricta 3 !== 3 ",desigualdad_estricta1)

// Menor que
menor = 3 < 5 // true
console.log("Menor que 3 < 5 es",menor)

// Mayor que
mayor = 3 > 5 // false
console.log("mayor que 3 > 5 es",mayor)

// Mayor o igual a que
mayor_igual= 3 >= 3 // true
console.log("mayor o igual a que 3 >= 3 es",mayor_igual)
mayor_igual1 = 3 >= 5 // false
console.log("mayor o igual a que 3 >= 5 es",mayor_igual1)

// Menor o igual a que
menor_igual = 3 <= 3 // true
console.log("Menor o igual a que 3 <= 3 es",menor_igual)
menor_igual1 = 3 <= 5 // true
console.log("Menor o igual a que 3 <= 5 es",menor_igual1)

//------------------------------------------------
// LOGICOS

a && b// AND, Y, a && b : a y b
a || b // OR, O, a || b : a o b
!a // NOT, Negación, a = true : !a = false


// Ejemplo operador disyunción lógico
var a2 = 15
var b2 = 5
console.log("Valor de las variables", a2, b2)

intervalo1 =(a2 >= 10) && (a2 <= 20) // true
console.log("El intervalo (a2 >= 10) && (a2 <= 20) es ", intervalo1)

intervalo2 = (b2 >= 10) && (b2 <= 20) // false
console.log("El intervalo (b2 >= 10) && (b2 <= 20) es ", intervalo2)

// Ejemplo operador unión lógico

var a = 15
var b = 5

exp1 = (a <= 10) || (a >= 20) // false
console.log("El exp (a <= 10) || (a >= 20) es ", exp1)

exp2 = (b <= 10) || (b >= 20) // true
console.log("El exp (b <= 10) || (b >= 20) es ", exp2)

// Ejemplo operador negación lógico

var a = 5

negacion = !(a < 0) // true

console.log("La negacion !(a < 0) es", negacion)

//----------------------------------------------------------------
// LOGICOS A NIVEL DE BITS

a << b // Desplazamiento a la izquierda  a << b
a >> b // Desplazamiento a la derecha  a >> b
a >>> b// Desplazamiento a la derecha sin signo  a >>> b
a & b// AND  a & b
a ^ b// XOR  a ^ b
a | b// OR  a | b
~b// NOT  a | b```

// En este desafío vas a recibir un parámetro secreto en la función solution. 
// Debes retornar true si el número secreto es mayor a 5 y false si es menor o igual.

export function solution(secreto) {
    return 5 < secreto;
  }

solution(1)
solution(5)
solution(10)