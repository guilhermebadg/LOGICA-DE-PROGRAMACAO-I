
function sorteia(){
    return Math.round(Math.random() * 10)
}

function sorteiaNumeros(quantidade){
    var segredos = [];

    var numero = 1;
    while (numero <= quantidade){

        var numeroAleatorio = sorteia();
      
        if (numeroAleatorio !== 0){
        var achou = false;

        for (var posicao = 0; posicao < segredos.length; posicao++){
            if (segredos[posicao] == numeroAleatorio){
                achou == true;
                break;
            }
        }

        if (achou == false){
            segredos.push(numeroAleatorio);
            numero++;
        } 
        }

    }

    return segredos;
}

var segredos  = sorteiaNumeros(3);

var input = document.querySelector("input");
var botao = document.querySelector("button")
input.value;

function verifica(){    

    var achou = false; 

    for (var posicao = 0; posicao < segredos.length; posicao++){
  
        if (input.value == segredos[posicao]){
            alert ("Você Acertou!");
            achou = true;
            break;
        } 
        }

    if (achou == false){
        alert("Você Errou!")
    }
 
    input.value = "";
    input.focus();
}

botao.onclick = verifica;