// Esta es mi funcion constructora que nos va a servir como template

function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}



//funcion constructora

var autoNuevo = new auto("Tesla", "Model 3", 2020);

// Generando nuevos objetos

var autoNuevo2 = new auto("Tesla", "modelo x", 2018);
var autoNuevo3 = new auto("Toyota", "modelo corolla", 2018);