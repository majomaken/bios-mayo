// const cities = ['Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Zaragoza'];

// Añadir un elemento al final del array
// cites.push('Málaga')

// console.log('Estas son las ciudades', cites);
// Eliminar un elemento al final del array
// cites.pop()

// Agregar un elemento al principio del array
// cities.unshift('Bogota');

// Eliminar un elemento al principio del array
// cities.shift();

// console.log('Estas es la ciudad de ', cities[4]);

// Añadir un elemento al principio del array

// console.log('Estas son las ciudades', cities);
// const valenciaIndex = cities.indexOf('Valencia');

// console.log('En total tienes un numero de ciudades de: ', cities.length);

// for (let i = 0; i < cities.length; i++) {
//   console.log('Este es el index actual de nuestro array ', i)
//   console.log('Bienvenido a la ciudad de ', cities[i]);
// }

// cities.forEach((city, numerito) => {
//   console.log('Este es el index actual de nuestro array ', numerito)
//   console.log('Bienvenido a la ciudad de ', city);
// });
const cities = ['Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Zaragoza'];

const citiesOfAmerica = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

// const newCities = citiesOfAmerica.map((city) => {
//   return city;
// })

// cities.forEach((city) => {
//   newCities.push(city)
// })

const totalCities = [...cities, ...citiesOfAmerica];

console.log('Todas las ciudades agregadas son: ', totalCities);
