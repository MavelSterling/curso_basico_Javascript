// La **estructura switch es otra manera de evaluar condiciones, 
// la diferencia con if es que las condiciones deben ser iguales a un caso o algo específico.

// Estructura: 

//switch (expresion) {
//   case 1: {
        // Bloque 1
//        break
//    }
//   case 2: {
        // Bloque 2
//        break
//    }     
// }


// switch (expresion) {
//    case 1: {
      // Bloque 1
//      break
//    }
//    case 2: {
     // Bloque 2
//      break
//   }
//    default: {
      // Bloque por defecto
//   }
//  }

// evalúa (switch) la variable expresion, 
// en el caso de que sea igual a uno (case 1), 
// entonces ejecuta el bloque 1 y termina (break),
// en el caso de que sea igual a dos (case 2), 
// entonces ejecuta el bloque 2 y termina (break), 
// si no se cumple ninguna, ejecuta un bloque por defecto (default)


// Ejemplo de un semaforo

function semaforo(color) {
    switch (color) {
      case "verde": {
        console.log("¡Sigue!")
        break
      }
      case "amarillo": {
        console.log("¡Detente!")
        break
      }
      case "rojo": {
        console.log("¡No puedes avanzar!")
        break
      }
      default: {
        console.log("¡No reconozco ese color! :/")
      }
    }
  }
  
semaforo("verde") // ¡Sigue!
semaforo("amarillo") // ¡Detente!
semaforo("rojo") // ¡No puedes avanzar!
semaforo("azul") // ¡No reconozco ese color! :/


//----------------------------------------------------------------
// JUEGO PIEDRA, PAPEL o TIJERA

var papel = "papel"
var piedra = "piedra"
var tijera = "tijera"

var resultado_juego = function( jugador, maquina){

    switch(jugador != null && maquina != null) {

    case (jugador == "papel"  && maquina == "piedra"):
         console.log("¡Ganaste! :D")
         break;
    case(jugador == "tijeras"  && maquina == "papel"):
         console.log("¡Ganaste! :D");
         break;
    case(jugador == "Piedra"  && maquina == "tijeras"):
        console.log("¡Ganaste! :D");
        break;
    case (jugador == "Piedra"  && maquina == "Piedra" ):
        console.log("empate :| ");
        break;
    case(jugador == "tijeras"  && maquina == "tijeras" ):
        console.log("empate :| ");
        break;
    case(jugador == "papel"  && maquina == "papel" ):
        console.log("empate");
        break;
    default:
         console.log("Perdiste :/")
    
    }
}
    
    resultado_juego(papel,piedra) // ¡Ganaste! :D
    resultado_juego(tijera,piedra) // Perdiste :/
    resultado_juego(piedra,tijera) // Perdiste :/
    resultado_juego(papel,papel) // empate
