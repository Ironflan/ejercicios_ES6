// Usando la función anterior beneficiate de poder conocer el indice del array 
// para crear una función llamada removeItem que pasandole un array y un texto 
// como parametros (los mismos parametros que en el anterior ejercicio) llame a 
// la función anteriormente creada findArrayIndex y obten el indice para 
// posteriormente usar la función de javascript .splice() para eliminar el 
// elemento del array.

// Finalmente retorna el array.

// De nuevo haz varios ejemplos para practicar y comprueba que funcionan 
// correctamente.
const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

function findArrayIndex(mainCharacters, text) {
  return mainCharacters.indexOf(text);  
}

function removeItem (array, text) {

  const index = findArrayIndex(array, text);
  if (index !== -1) {
    array.splice(index, 1) // elimina 1 elemento en la posición index
  }
  return array;
}
console.log(removeItem(mainCharacters, "Chewbacca")); // Debería eliminar "Chewbacca" del array
console.log(removeItem(mainCharacters, "Darth Vader")); // No se eliminará nada ya que no está en el array

//! NO ME FUNCIONA