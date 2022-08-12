
    function pulaLinha() {

        document.write("<br>");
    }

    function mostra(frase) {

        document.write(frase);
        pulaLinha();
    }

    function sorteia(n) {

        return Math.round(Math.random() * n);
    }    

    var numeroPensado = sorteia(10);

    var chute = parseInt(prompt("Já pensei. Qual você acha que é?"));

    if(chute == numeroPensado) {

        mostra("Uau! Você acertou, pois eu pensei no " + numeroPensado);
    } else {

        mostra("Você errou! Eu tinha pensado no " + numeroPensado);
    }