

function pularLinha(){
    document.write("<br>");
    document.write("<br>");
}

function mostra(mostrarFrase){
    document.write(mostrarFrase);pularLinha()
}

var ano = 2022;

//document.write ("Flavio tem " + (ano - 1977) + " anos");
mostra("Flavio tem " + (ano - 1977) + " anos");
pularLinha();

//document.write ("Joaquim tem " + (ano - 1966) + " anos");
mostra("Joaquim tem " + (ano - 1966) + " anos");
pularLinha();

ano = 2017;
//document.write ("Barney tem " + (ano - 1976) + " anos");
mostra("Barney tem " + (ano - 1976) + " anos");
pularLinha();

var idadeFlavio = 39;
var idadeJoaquim = 39;
var idadeBarney = 39;
var média = (idadeFlavio + idadeJoaquim + idadeBarney)/3;

document.write("A média das idades é " + Math.round(média));

var nome = "Flavio";
pularLinha();

document.write ('A idade de ' + nome + " é " + idadeFlavio);
