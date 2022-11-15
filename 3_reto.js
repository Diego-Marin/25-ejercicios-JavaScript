/* El Grinch quiere fastidiar la Navidad ❌🎄
El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...

---------------------------------------------------------  Ejemplos:
/* "bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅
"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌ 

//----------------------- true 
// /\(\w+\)/gmiu  : (asasas)

//----------------------- falsos
// /\(\)/giu  : ()

// /\([ ]\)/giu  : ( )

// /\(\w+/giu : (asasasa

// []{}
*/

//------------------------------------------------------------------------------------------------------------------------------
/* Ejemplo */

const carta = "bici coche (balon) bici coche peluche"

let validacionCartas = /\(\w+\)/gmiu;

let resultadoValidaciones = carta.match(validacionCartas).test();

validarCartas = carta => carta.includes(resultadoValidaciones);

console.log(validarCartas(carta));

//------------------------------------------------------------------------------------------------

console.log(resultadoValidaciones(carta));

function isValid(letter) {
    return !letter.split(' ').some((name) => [...name].some((char, i) => char === '(' && name.charAt(i + 1) === ')') || 
     (name.startsWith('(') && !name.endsWith(')')) || (name.startsWith('{') && !name.endsWith('}')));
}