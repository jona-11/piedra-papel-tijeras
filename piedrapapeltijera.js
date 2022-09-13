
let resultadoFinal = document.getElementById("resultado");
let eleccionPc = document.getElementById("eleccionPc");
let conteoUsusario = document.getElementById("conteoUsuario");
let conteoPc = document.getElementById("conteoPc");


let contadorUsuario = [];
let contadorPC = [];

function combate (usuario1, pc){

    if (usuario1 == "piedra" && pc == "tijeras" || usuario1 == "tijeras" && pc=="papel" || usuario1 == "papel" && pc=="piedra"){
        eleccionPc.innerHTML= "tu oponente eligio " + pc ;
        resultadoFinal.innerHTML= "GANASTE!! 😁";
        contadorUsuario.push(1);
    }else if (usuario1 == pc){
        eleccionPc.innerHTML= "tu oponente eligio " + pc ;
        resultadoFinal.innerHTML= "empate";
    }else {
        eleccionPc.innerHTML= "tu oponente eligio " + pc ;
        resultadoFinal.innerHTML= "perdiste 😢";
        contadorPC.push(1);

    }
    conteoPc.innerHTML = "PC: " + contadorPC.length;
    conteoUsusario.innerHTML = "Jugador: " + contadorUsuario.length;

                 
     if (contadorPC.length == 10){
         alert ("tu oponente ganó por "+ (contadorPC.length-contadorUsuario.length)+ " puntos");
         location.reload();
     }
     if (contadorUsuario.length==10){
         alert ("ganaste por "+ (contadorUsuario.length- contadorPC.length)+ " puntos");
         location.reload();
         
     }    
    
}


function computadoraResultado(){
    let resultado = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        if(resultado == 2 ){
            return "papel"
        }else if(resultado == 3 ){
            return "tijeras"
        }else{
            return "piedra";
        }
 }

function papel(){
            
    const usuario1 ="papel";
    let pc=computadoraResultado();
                           
    combate(usuario1,pc);
}

function piedra(){
            
    const usuario1 ="piedra";
    let pc=computadoraResultado();
                           
    combate(usuario1,pc);
  }
function tijeras(){
   const usuario1 = "tijeras";
   let pc=computadoraResultado();
                           
   combate(usuario1,pc);
                          

  }
                    
                     

    
