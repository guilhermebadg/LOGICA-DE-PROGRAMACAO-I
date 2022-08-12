
function pularLinha(){
    document.write ("<br>");
    document.write ("<br>");
}

function mostra(mensagem){
    document.write (mensagem)
    pularLinha();
}

var contador = 0;

while(contador <= 100){

    mostra(contador);
    contador = contador + 2;
    }

    mostra("Fim.");