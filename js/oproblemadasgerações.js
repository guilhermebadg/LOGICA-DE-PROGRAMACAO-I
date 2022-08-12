function pularLinha(){
    document.write("<br>");
    document.write("<br>");
}

function mostra(mostrarFrase){
    document.write(mostrarFrase);
}

var anoDescobrimento = 1500
var anoAtual = 2022
var mediaFilho = 28

var diferenca = anoAtual - anoDescobrimento;
var numeroDeGeracoes = diferenca / mediaFilho;

mostra ("Se passaram " + Math.round(numeroDeGeracoes) + " gerações desde " + anoDescobrimento);
pularLinha()