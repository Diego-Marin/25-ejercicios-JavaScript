const almacen = {
    'estanteria1': {
      'cajon1': {
        'producto1': 'coca-cola',
        'producto2': 'fanta',
        'producto3': 'sprite'
      }
    },
    'estanteria2': {
      'cajon1': 'vacio',
      'cajon2': {
        'producto1': 'pantalones',
        'producto2': 'camiseta' // <- ¡Está aquí!
      }
    }
  }

//----------------------------------------------------------------------------------------------------------------------
/* Ejemplo */

function contains(object, value){
    for (const element in object){
        if ((typeof object[element])  === "object" && !Array.isArray(element)){
            let temp = contains(object[element], value);
            if (!temp){continue};
            return true;
        }  
        else if(object[element] === value){
            return true;
        }
    }
    return false;
}
console.log(contains(almacen,'camiseta'));

//----------------------------------------------------------------------------------------------------------------------
/* Ejemplo */

function contains(store, product) {
    return Object.values(store).some(value => {
      if (typeof value === 'object'){
        return contains(value, product);
      }
      return value === product
    }
    )
}
console.log(contains(almacen,'camiseta'));

//----------------------------------------------------------------------------------------------------------------------
/* Ejemplo */

function contains(store, searchProduct) {
    return (
      typeof store === "object"
      ? Object.values(store).some( contenedor => contains(contenedor, searchProduct) )
      : store === searchProduct
    )
  }
  console.log(contains(almacen,'camiseta'));