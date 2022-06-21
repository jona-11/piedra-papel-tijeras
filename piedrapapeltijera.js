//definimos las variables que vamos a utilizar





let resultadoFinal = document.getElementById("resultado");
let eleccionPc = document.getElementById("eleccionPc");
let conteoUsusario = document.getElementById("conteoUsuario");


    
        
           
           
        let piedra = document.getElementById("piedra");
        let papel= document.getElementById("papel");
        let tijeras= document.getElementById("tijeras");
        
        
        
        
        function piedraPapelTijeras(){
            
            function usuario1(){
                   
                       if(papel) {return "papel";
           
                       } if (tijeras){
                           return "tineras";
                       }if ( piedra){
                           return "piedra";
                       }}
   

console.log(usuario1);
    
    let resultado = computadoraResultado();
    function computadoraResultado(){
        let resultado;
        resultado = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
        return resultado;
        //return sirve para devolver un valor a la funcion//
    }
    
    function computadora(){
    
        if(resultado % 2){
            return "papel"
        }
        else if(resultado % 3 ){
            return "tijeras"
        }
        else
        return "piedra";
    
    }
    

    /* if(computadora() === "piedra"){

       
        eleccionPc.innerHTML= "tu oponente eligio piedra" ;
    

    }if(computadora() === "papel"){
        eleccionPc.innerHTML= "tu oponente eligio papel" ;
        
    }if(computadora() === "tijeras"){
        eleccionPc.innerHTML= "tu oponente eligio tijeras" ;
        
    } */
    

   

    if(usuario1() == "piedra" && computadora() === "tijeras"){
        resultadoFinal.innerHTML= "GANASTE!!";
        
        
    }
    if(usuario1() == "tijeras" && computadora() === "papel"){
        resultadoFinal.innerHTML= "GANASTE!!";
        
    }
     if(usuario1() == "papel" && computadora() === "piedra"){
        resultadoFinal.innerHTML= "GANASTE!!";
        
    }
    if(usuario1() == "piedra" && computadora() === "papel"){
        resultadoFinal.innerHTML= "perdiste :(";
        
    }
     if(usuario1() == "tijeras" && computadora() === "piedra"){
         resultadoFinal.innerHTML= "perdiste :(";
        }
        if(usuario1() == "papel" && computadora() === "tijeras"){
            resultadoFinal.innerHTML= "perdiste :(";
            
        }
     if(usuario1() == computadora()){
        resultadoFinal.innerHTML= "empate";
        
    }

    
}
    
     




//declaramos las funciones
