//Contando ovejas para dormir

/* Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. 
Haz una función que devuelva una lista con todas las ovejas que sean de color 
**rojo** **y que además** su nombre contenga tanto las letras **n** Y **a**, sin importar el orden, 
las mayúsculas o espacios. */

let ovejas = [
    {name: "aaron", color: "rojo"},
    {name: "nacy", color: "rojo"},
    {name: "cara", color: "azul"},
    {name: "daniel", color: "rosada"},
    {name: "Nidia",color: "rojo"},
    {name: "fin",color: "morada"},
    {name: "george", color: "blanca"},
];

//------------------------------------------------------------------------------------------------------------------------------
/* Ejemplo */

  function filtrarPorColorOveja(ovejas) {
    if ('color' in ovejas && ovejas.color === 'rojo' && ovejas.name === name.includes('a') != -1 && ovejas.name === name.includes('n') != -1 ){
      return true;
    } else {
      return false;
    }
  }
  
var arrPorColor = ovejas.filter(filtrarPorColorOveja);

//------------------------------------------------------------------------------------------------------------------------------
/* Ejemplo */

console.log('Array Filtrado\n', arrPorColor);
  
function contarOvejas(ovejas) {

    return ovejas.filter(
        function filterOveja(oveja){
            
        const {name,color} = oveja

        const lowerCaseName = name.toLowerCase()

        return color ==='rojo' && lowerCaseName.includes('n') && lowerCaseName.includes('a')
   })

}


