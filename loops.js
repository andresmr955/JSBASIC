var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`)
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i])
}

///Segunda Opcion 
// recorre los valores de un objeto iterable

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`)
}

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}
///Tercera Opcion WHILE

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}