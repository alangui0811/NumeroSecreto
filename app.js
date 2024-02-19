let numeroSecreto;
let contador;
let numerosSecretos=[];
let maximoIntentos=2;

condicionesinicial();
function NumeroAleatorio() {
    let numero = Math.floor(Math.random()*10)+1;
    return numero;
}
function asignarTexto(elemento,texto) {
    let text = document.querySelector(elemento);
    text.innerHTML = texto;
    return;
}    
function condicionesinicial() {
    if(contador==maximoIntentos){
        Final();
    }
    else{
        asignarTexto('h1','Numero secreto');
        asignarTexto('p','Ingresa un numeor entre el 1 y el 10');
        numeroSecreto=NumeroAleatorio();
        if (numerosSecretos[numerosSecretos.length-1]==numerosSecretos[numerosSecretos.length-2]){
            numeroSecreto=NumeroAleatorio();
        }
        contador=1;
    }
}

console.log(numeroSecreto);
function Intento(){
    //Si acierta
    let numeroUsuario = parseInt(document.getElementById('NumeroUsuario').value);
    if (numeroUsuario===numeroSecreto) {
        asignarTexto('p',`¡Felicidades acertaste!, lo lograste en ${contador} ${(contador ===1) ? 'vez' : 'veces' } `);  
        document.getElementById('reiniciar').removeAttribute('disabled');
        numerosSecretos.push(numeroSecreto);
    }
    else{
        //Si falla
        if (numeroUsuario<numeroSecreto) {
            asignarTexto('p','Tu numero es menor');
        }
        else if (numeroUsuario>numeroSecreto) {
            asignarTexto('p','Tu numero es mayor'); 
        }
        contador++;
        limpiar();
    }
}    
function limpiar() {
    document.querySelector('#NumeroUsuario').value='';
}
function reiniciarg() {
    limpiar();
    condicionesinicial();    
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
function Final() {
    asignarTexto('p','Numero maximo de intentos alcancado, Perdiste');
}