var opc1 = "Rock"; 
var opc2 = "Paper";
var opc3 = "Scissors";


function game(user,pc){
    if(user != pc){
        if(user === opc1 && pc === opc3){
            console.log("user Gano user con " + opc1);
        }
        else if(user === opc2 && pc === opc1){
            console.log("user Gano user con " + opc2);
        }
        else if(user === opc3 && pc === opc2){
            console.log("user Gano user con " + opc3)
        }else{
            console.log("LA CPU GANO");
        }
    }else { 
        console.log("EMPATE")       
     }
};

game(opc1, opc3);