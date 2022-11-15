//----------------------------------------------------------------------------------------------------------------------
/* Ejemplo */

function sumPairs(numbers, result) {
    let resultado = null;
    let primerEncontrado = false;
    for (let index = 0; index < numbers.length; index++){
        for (let posElemento = 0; posElemento < numbers.length; posElemento++) {
            let valorAnterior = numbers[index];
            let valorActual = numbers[posElemento];
            if (index != posElemento){
                if (valorAnterior + valorActual == result) {
                    resultado = [];
                    resultado.push(valorAnterior, valorActual)
                    primerEncontrado = true;
                    break
                } 
            }
        }
        if (primerEncontrado == true){break}
    }
    return resultado
}
console.log(sumPairs([3, 5, 7, 2], 10))
console.log(sumPairs([-3, -2, 7, -5], 10))
console.log(sumPairs([2, 2, 3, 1], 4))
console.log(sumPairs([6, 7, 1, 2], 8))
console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6))

//----------------------------------------------------------------------------------------------------------------------
/* Ejemplo */

function sumPairs(numbers, result) {
    return recorrerNumeros(0,numbers,result,[]);
}
function recorrerNumeros(index,numbers,result, resultado) {
    if (numbers.length < index) return null;
    for (let posElemento = 0; posElemento < numbers.length; posElemento++) {
        let valorAnterior = numbers[index];
        let valorActual = numbers[posElemento];
        if (index != posElemento && valorAnterior + valorActual === result) {
            resultado.push(valorAnterior, valorActual)
            break
        }
        if (posElemento === numbers.length - 1){
            recorrerNumeros((index + 1),numbers,result, resultado);
        }
    }
    return resultado.length === 0 ? null : resultado
}
console.log(sumPairs([3, 5, 7, 2], 10))
console.log(sumPairs([-3, -2, 7, -5], 10))
console.log(sumPairs([2, 2, 3, 1], 4))
console.log(sumPairs([6, 7, 1, 2], 9))
console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6))
console.log(sumPairs([],0));