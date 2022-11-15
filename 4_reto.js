/* ¡Es hora de poner el árbol de navidad en casa! 🎄

Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.

Creamos un triángulo de asteríscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado. Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

Ten en cuenta que el árbol es un string y necesitas los saltos de línea \n para cada línea para que se forme bien el árbol.

______*______   1   12
_____***_____   3   10
____*****____   5   8
___*******___   7   6
__*********__   9   4
_***********_   11  2
*************   14  0

//1.recibir el numero de filas que sera = al tamaño el Arbol  
2. el numero del tamaño del arbol (n) = (* + 2) x n en cada resultado de la operacion haga convierta el entero por * y finalice con un salto de linea.
3. el numero de * de cada fila es igual al numero de (_ - 1) de pero iniciando de abajo hacia arriba.
4. se divide el resultado de los _ en dos y se ubica los * en la mitad del string.
*/


let tamanoArbol = 5;
let columnasArbol= '';
let temporal = '';

for (let fila = 1; fila <= tamanoArbol; fila++){
  for(let column = 1; column <= tamanoArbol; column++){
    if(columnasArbol === ''){
      columnasArbol += '*';
    } else columnasArbol + '**';
  }
  columnasArbol += '\n';
}
console.log(columnasArbol);
