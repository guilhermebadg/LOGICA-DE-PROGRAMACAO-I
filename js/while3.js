
function pularLinha(){
    document.write ("<br>");
    document.write ("<br>");
}

function mostra(mensagem){
    document.write (mensagem)
    pularLinha();
}

var contador = 20;

while(contador >= 0){

    mostra (contador);
    contador = contador - 1;
    
    }

    mostra("Fim.");
