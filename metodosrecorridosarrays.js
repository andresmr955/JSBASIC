//Estos son los metodos 
//Los métodos de recorrido de arrays son funciones o técnicas utilizadas para iterar a través de los elementos de un arreglo (array) en un lenguaje de programación. Estos métodos son esenciales en la programación y tienen varios propósitos y aplicaciones, incluyendo:



var articulos = [
    {nombre: "Bici", costo: 3000}, {nombre: "Tv", costo: 2500},{nombre:"Libro", costo: 320},{nombre:"Celular", costo: 1000},{nombre:"Laptop", costo: 2000},{nombre:"Teclado", costo: 500},{nombre:"Audifonos", costo: 1700},
];


var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500});

    articulosFiltrados

    var nombreArticulos = articulos.map(function(articulo){
        return articulo.nombre;
    });

    nombreArticulos


    var costoArticulos = articulos.map(function(articulo){
        return articulo.costo;
    });

    costoArticulos