// Crea una función llamada swap que reciba un array y dos parametros que sean 
// indices del array. La función deberá intercambiar la posición de los valores de 
// los indices que hayamos enviado como parametro. Retorna el array resultante.

// Sugerencia de array:

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

const swap = (array, index1, index2) => {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;

  return array;
};

// Se guarda el valor del elemento en la posición index1 en una variable temporal llamada temp.
// Se actualiza el elemento en la posición index1 con el valor del elemento en la posición index2.
// Se actualiza el elemento en la posición index2 con el valor almacenado en temp.
// La función devuelve el array modificado.

const swappedFantasticFour = swap(fantasticFour, 1, 2);

// Después de esta línea, swappedFantasticFour contendrá el array fantasticFour con los elementos en las posiciones 1 y 2 intercambiados.

console.log(swappedFantasticFour);