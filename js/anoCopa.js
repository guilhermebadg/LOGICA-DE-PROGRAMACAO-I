
function pularLinha(){
    document.write ("<br>");
    document.write ("<br>");
}

function mostra(mensagem){
    document.write (mensagem)
    pularLinha();
}

var anoLimite = parseInt(prompt("Entre com a data limite"));
var anoCopa = 1930;

while(anoCopa <= anoLimite){

    mostra("Teve copa em " + anoCopa);
    anoCopa = anoCopa + 4;

    }

    mostra("Fim.");
