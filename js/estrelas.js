function pularLinha(){
    document.write ("<br>");
}

function mostra(mensagem){
    document.write (mensagem)
    pularLinha();
}

for (var linha = 1; linha <=3; linha++){
    for (var coluna = 1; coluna <= 10; coluna++){
    document.write("*");
    }
    pularLinha();
}