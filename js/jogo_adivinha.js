function pularLinha(){
    document.write ("<br>");
    document.write ("<br>");
}

function mostra(mensagem){
    document.write (mensagem)
    pularLinha();
}

var numeroPensado = Math.round(Math.random() * 10);

var tentativas = 1;

while(tentativas <= 3){
    var chute = parseInt(prompt("Digite o seu chute"));

    if (chute == numeroPensado){
    mostra("VOCÊ ACERTOU!!! o número pensado era " + numeroPensado);
    break;

} else{
    mostra ("VOCÊ ERROU!");
}
    tentativas++;
}

mostra ("Fim!")
mostra ("Fim!")