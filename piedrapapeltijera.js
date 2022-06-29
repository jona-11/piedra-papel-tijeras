
let resultadoFinal = document.getElementById("resultado");
let eleccionPc = document.getElementById("eleccionPc");
let conteoUsusario = document.getElementById("conteoUsuario");
let conteoPc = document.getElementById("conteoPc");


let contadorUsuario = [];
let contadorPC = [];



function papel(){
            
            const usuario1 ="papel";

            let resultado = computadoraResultado();
            function computadoraResultado(){
                let resultado;
                resultado = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
                return resultado;
                //return sirve para devolver un valor a la funcion//
            }
            console.log(computadora());
            
            function computadora(){
            
                if(resultado % 2 == 0){
                    return "papel"
                }
                else if(resultado % 3 == 0 ){
                    return "tijeras"
                }
                else
                return "piedra";
            
            }
            
        
             if(computadora() === "piedra"){
        
               
                eleccionPc.innerHTML= "tu oponente eligio piedra" ;
            
        
            }if(computadora() === "papel"){
                eleccionPc.innerHTML= "tu oponente eligio papel" ;
                
            }if(computadora() === "tijeras"){
                eleccionPc.innerHTML= "tu oponente eligio tijeras" ;
                
            } 
        
            if(usuario1 == "piedra" && computadora() === "tijeras"){
                resultadoFinal.innerHTML= "GANASTE!!";
                contadorUsuario.push(1);
                
                
            }
            if(usuario1 == "tijeras" && computadora() === "papel"){
                resultadoFinal.innerHTML= "GANASTE!!";
                contadorUsuario.push(1);
                
            }
             if(usuario1 == "papel" && computadora() === "piedra"){
                resultadoFinal.innerHTML= "GANASTE!!";
                contadorUsuario.push(1);
            }
            if(usuario1 == "piedra" && computadora() === "papel"){
                resultadoFinal.innerHTML= "perdiste :(";
                contadorPC.push(1);
                
            }
             if(usuario1 == "tijeras" && computadora() === "piedra"){
                 resultadoFinal.innerHTML= "perdiste :(";
                 contadorPC.push(1);
                }
                if(usuario1 == "papel" && computadora() === "tijeras"){
                    resultadoFinal.innerHTML= "perdiste :(";
                    contadorPC.push(1);
                }
             if(usuario1 == computadora()){
                resultadoFinal.innerHTML= "empate";
                
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

function piedra(){
            
            const usuario1 ="piedra";
            let resultado = computadoraResultado();
            function computadoraResultado(){
                let resultado;
                resultado = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
                return resultado;
                //return sirve para devolver un valor a la funcion//
            }
            console.log(computadora());
            
            function computadora(){
            
                if(resultado % 2 == 0){
                    return "papel"
                }
                else if(resultado % 3 == 0 ){
                    return "tijeras"
                }
                else
                return "piedra";
            
            }
            
        
             if(computadora() === "piedra"){
        
               
                eleccionPc.innerHTML= "tu oponente eligio piedra" ;
            
        
            }if(computadora() === "papel"){
                eleccionPc.innerHTML= "tu oponente eligio papel" ;
                
            }if(computadora() === "tijeras"){
                eleccionPc.innerHTML= "tu oponente eligio tijeras" ;
                
            } 
        
            if(usuario1 == "piedra" && computadora() === "tijeras"){
                resultadoFinal.innerHTML= "GANASTE!!";
                contadorUsuario.push(1);
                
            }
            if(usuario1 == "tijeras" && computadora() === "papel"){
                resultadoFinal.innerHTML= "GANASTE!!";
                contadorUsuario.push(1);
            }
             if(usuario1 == "papel" && computadora() === "piedra"){
                resultadoFinal.innerHTML= "GANASTE!!";
                contadorUsuario.push(1);
            }
            if(usuario1 == "piedra" && computadora() === "papel"){
                resultadoFinal.innerHTML= "perdiste :(";
                contadorPC.push(1);
                
            }
             if(usuario1 == "tijeras" && computadora() === "piedra"){
                 resultadoFinal.innerHTML= "perdiste :(";
                 contadorPC.push(1);
                }
                if(usuario1 == "papel" && computadora() === "tijeras"){
                    resultadoFinal.innerHTML= "perdiste :(";
                    contadorPC.push(1);
                }
             if(usuario1 == computadora()){
                resultadoFinal.innerHTML= "empate";
                
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

function tijeras(){
            
            const usuario1 ="tijeras";
            let resultado = computadoraResultado();
            function computadoraResultado(){
                let resultado;
                resultado = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
                return resultado;
                //return sirve para devolver un valor a la funcion//
            }
            console.log(computadora());
            
            function computadora(){
            
                if(resultado % 2 == 0){
                    return "papel"
                }
                else if(resultado % 3 == 0 ){
                    return "tijeras"
                }
                else
                return "piedra";
            
            }
            
        
             if(computadora() === "piedra"){
        
               
                eleccionPc.innerHTML= "tu oponente eligio piedra" ;
            
        
            }if(computadora() === "papel"){
                eleccionPc.innerHTML= "tu oponente eligio papel" ;
                
            }if(computadora() === "tijeras"){
                eleccionPc.innerHTML= "tu oponente eligio tijeras" ;
                
            } 
        
            if(usuario1 == "piedra" && computadora() === "tijeras"){
                resultadoFinal.innerHTML= "GANASTE!!";
                contadorUsuario.push(1);
                
            }
            if(usuario1 == "tijeras" && computadora() === "papel"){
                resultadoFinal.innerHTML= "GANASTE!!";
                contadorUsuario.push(1);
            }
             if(usuario1 == "papel" && computadora() === "piedra"){
                resultadoFinal.innerHTML= "GANASTE!!";
                contadorUsuario.push(1);
            }
            if(usuario1 == "piedra" && computadora() === "papel"){
                resultadoFinal.innerHTML= "perdiste :(";
                contadorPC.push(1);
                
            }
             if(usuario1 == "tijeras" && computadora() === "piedra"){
                 resultadoFinal.innerHTML= "perdiste :(";
                 contadorPC.push(1);
                }
                if(usuario1 == "papel" && computadora() === "tijeras"){
                    resultadoFinal.innerHTML= "perdiste :(";
                    contadorPC.push(1);
                }
             if(usuario1 == computadora()){
                resultadoFinal.innerHTML= "empate";
                
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

                     

    
