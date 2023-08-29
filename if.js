if(true){
     console.log("Hi, I'm true"); 
 }else if (true) {
    console.log("Soy Falso");
 } else {}

var edad = 18;

if(edad === 18){
    console.log("You can vote, It will be your first votation")
}else if( edad > 18){
    console.log("You can vote again");
}else {
    console.log("You can't vote yet");
}

// Operador Ternario
// condition ? true : false;

var number = 1;
var result = number === 1 ? "I'm 1" : "Not, I'm not";
console.log(result);