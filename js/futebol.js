
function pularLinha(){
    document.write ("<br>");
    document.write ("<br>");
}

function mostra(mensagem){
    document.write (mensagem)
    pularLinha();
}

var  vitorias = parseInt(prompt("Qual o número de vitórias?"));

var empates = parseInt(prompt("Qual o número de empates?"));

var pontos = vitorias * 3 + empates;

mostra("Os pontos do seu time são " + pontos)

if (pontos > 28){
mostra ("Seu time está melhor do que o ano passado");
}

else if (pontos < 28){
mostra ("Seu time está pior do que o ano passado");
}

else if (pontos == 28){
mostra ("Seu time está igual ano passado");
}
