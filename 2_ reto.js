//¡Ayuda al elfo a listar los regalos!

/* Te ha llegado una carta con todos los regalos que debes preparar. 

El tema es que es una cadena de texto y es muy difícil de leer 😱.

¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque al ser niños, 
igual han colado más espacios de la cuenta)
Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por ejemplo _playstation, 
que significa que está tachado y no se tiene que contar.
Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. */

const carta = 'bici  coche balón _playstation bici coche  peluche'

let regalosFinales = {};
let listaRegalos = carta.split(' ');



listaRegalos.filter((item)=> item !== "" && !item.includes('_')).forEach((numero) => {
  if (!regalosFinales[numero]) {
    regalosFinales[numero] = 0;
  }
  regalosFinales[numero] = regalosFinales[numero] + 1;
});

console.log(regalosFinales);

//-----------------------------------------------------------------------------------------------------------------------

function listGifts(letter) {
    const obj ={}
    letter.split(' ')
    .filter(item => !item.includes('_') && item !== "")
    .forEach((item) => obj[item] = (obj[item] || 0) + 1)
    return obj
}

