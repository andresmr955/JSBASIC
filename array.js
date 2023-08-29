var frutas = ["man", "pla", "cer", "fre"];
console.log(frutas); //para ver que hay dentro del array 
console.log(frutas.length); // saber el tamano de mi array
console.log(frutas[0]); // saber la ubicacion en posiciones de mi array

//METODOS

var masFrutas = frutas.push("Pera"); //Agregar elementos al final 
var menosFrutas = frutas.pop("Pera"); // Eliminar elemento al final
var menosFaceFrutas = frutas.unshift("cebolla"); // Agregar al comienzo 
var masFaceFrutas = frutas.shift("cebolla"); // Eliminar al comienzo


var position = frutas.indexOf("cer"); //Buscar el index para encontrar objetos dentro del array