// Crea una función llamada rollDice() que reciba como parametro el numero de caras 
// que queramos que tenga el dado que deberá simular el codigo dentro de la función. 
// Como hemos dicho, que la función use el parametro para simular una tirada de dado 
// y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te 
// preocupes! Busca información sobre la función de javascript Math.random()

// const rollDice = (numFaces) => {
//   const randomValue = Math.floor(Math.random() * numFaces) + 1;
//   return randomValue;
// };

const rollDice = (numFaces) => {
  // Math.random() genera un número decimal entre 0 (incluido) y 1 (excluido)
  // Multiplicamos por numFaces para obtener un número en el rango [0, numFaces)
  const randomValue = Math.floor(Math.random() * numFaces) + 1;
  
  // La línea anterior genera un número entre 0 (incluido) y numFaces (excluido),
  // y luego le sumamos 1 para obtener un resultado entre 1 e numFaces (incluyendo ambos).
  
  return randomValue;
};

// Ejemplo: Lanzar un dado de 6 caras
const resultado = rollDice(6);
console.log("Resultado del dado:", resultado);
