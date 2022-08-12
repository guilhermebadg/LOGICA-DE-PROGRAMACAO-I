
function pularLinha(){
    document.write ("<br>");
    document.write ("<br>");
}

function mostra(mensagem){
    document.write (mensagem)
    pularLinha();
}

var numeroPensado = Math.round(Math.random() * 10);

var chute = parseInt(prompt("Escolha um número de 1 a 10!"));

if (chute == numeroPensado){
    mostra("VOCÊ ACERTOU!!! PARABÉNS");
} else{
    mostra ("VOCÊ ERROU!");
    if (chute > numeroPensado){
        mostra ("seu número é maior do que o número pensado")
    } 
    if (chute < numeroPensado){
        mostra ("seu número é menor do que o número pensado")
    }
}