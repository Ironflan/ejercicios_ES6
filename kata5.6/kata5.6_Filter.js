// Dado el siguiente javascript, utiliza .filter() para mostrar por consola 
// los streamers que incluyan la palabra introducida en el input. De esta forma, si 
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
// introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamersFilter = (e) => {
const streamersFiltered = streamers.filter((streamer) => streamer.name.toLowerCase().includes(e.target.value));
console.log(streamersFiltered);
}


const myInput = document.querySelector("input");

myInput.addEventListener("input", streamersFilter);

// El método toLowerCase() se utiliza para asegurarse de que la comparación de cadenas sea insensible a mayúsculas y minúsculas. En este caso, se utiliza para normalizar las cadenas antes de realizar la comparación, lo que significa que no importa si el usuario introduce el texto en mayúsculas, minúsculas o una combinación de ambas.

// streamer.name es el nombre del streamer.
// .toLowerCase() convierte ese nombre a minúsculas.
// .includes(e.target.value) verifica si la subcadena introducida por el usuario (obtenida de e.target.value, donde e es el evento de input) está incluida en el nombre del streamer en minúsculas.
// Esto garantiza que la búsqueda sea insensible a mayúsculas y minúsculas, por lo que, por ejemplo, si el usuario introduce "Ru", coincidirá tanto con "Rubius" como con "rubius". Es una práctica común normalizar las cadenas a minúsculas o mayúsculas antes de realizar comparaciones para evitar problemas de sensibilidad a la capitalización.