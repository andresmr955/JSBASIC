var articulos = [
    {nombre: "Bici", costo: 3000}, {nombre: "Tv", costo: 2500},{nombre:"Libro", costo: 320},{nombre:"Celular", costo: 1000},{nombre:"Laptop", costo: 2000},{nombre:"Teclado", costo: 500},{nombre:"Audifonos", costo: 1700},
];


// .FIND
var encuentraArtiuculo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"  
 });

 encuentraArtiuculo


 // .FOREACH
 
 articulos.forEach(function(articulo){
    console.log(articulo.nombre)
 });

 // some();

 var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
 });

 