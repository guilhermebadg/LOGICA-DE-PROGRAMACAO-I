function pularLinha(){
    document.write("<br>");
    document.write("<br>");
}

function mostra(mostrarFrase){
    document.write(mostrarFrase);
}

var minhaIdade = 18;
var idadeGustavo = 14;

mostra("Quantos anos você tem de diferença do seu irmão?")
pularLinha()

mostra ("Nossa diferença de idade é " + (minhaIdade - idadeGustavo));
pularLinha()