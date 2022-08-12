function pularLinha(){
    document.write ("<br>");
    document.write ("<br>");
}

function mostra(mensagem){
    document.write (mensagem)
    pularLinha();
}

function calcularIMC(peso, altura) {
    var imc = peso / (altura * altura);
    return imc;
}

var nome = prompt ("Olá, boa tarde! informe o seu nome")
var alturaInformada = prompt (nome + ", informe a sua altura!");
var pesoInformado = prompt (nome + ", informe o seu peso!");

var imc = calcularIMC(pesoInformado, alturaInformada);

mostra(nome + ", o seu IMC calculado é " + imc);

if (imc < 18.5){
    mostra ("Você está abaixo do recomendado!")
}

if (imc > 35){
    mostra ("Você está acima do recomendado!")
}

if (imc >= 18.5 && imc <= 35){
    mostra ("Seu IMC está na média!")
}