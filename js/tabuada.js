
    function pulaLinha() {
        document.write("<br>");
        document.write("<br>");
    }

    function mostra(frase) {

        document.write(frase);
        pulaLinha();
    }

    var multiplicador = 1;

    while(multiplicador <=10){
        mostra(7 * multiplicador);
        multiplicador = multiplicador++;
    }

    mostra ("FIM!!!!!");

    for(var multiplicador = 1; multiplicador <=10; multiplicador = multiplicador++){
        mostra (7 * multiplicador);
    }

    //FOR - ESTRUTURA DIVIDIDA EM 3 PARTES/PARAMETROS:
    //1) variavel (inicializar a condicao SE)
    //2) condicao de repeticao
    //3) incremento da variavel (terminar a condicao SE)