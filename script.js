let quantidadeSim = 0;
let classificacao;
let mensagem;
let atual = 1;

mostrarPergunta();

function mostrarPergunta() {
    let pergunta;

    switch (atual) {
        case 1:
            pergunta = "Você conhecia a vítima?";
            break;
        case 2:
            pergunta = "Você esteve no local da ocorrência?";
            break;
        case 3:
            pergunta = "Você tinha algum conflito com a vítima?";
            break;
        case 4:
            pergunta = "Você sabia que a ocorrência aconteceria?";
            break;
        case 5:
            pergunta = "Você conversou com alguém sobre a ocorrência antes dela acontecer?";
            break;
        case 6:
            pergunta = "Você possui informações que ainda não contou à polícia?";
            break;
        case 7:
            pergunta = "Você esteve com algum dos envolvidos naquele dia?";
            break;
        case 8:
            pergunta = "Você recebeu algum benefício relacionado à ocorrência?";
            break;
        case 9:
            pergunta = "Você ajudou alguém a esconder informações sobre o caso?";
            break;
        default:
            pergunta = "Você participou diretamente da ocorrência?";
    }

    document.getElementById("pergunta").innerHTML = pergunta;
    document.getElementById("numero").innerHTML = "Pergunta " + atual + " de 10";

    if (atual == 10) {
        document.getElementById("responder").innerHTML = "Finalizar Teste";
    }
}

function responder() {
    let resposta = document.getElementById("resposta").value;

    if (resposta == "") {
        alert("Escolha uma resposta!");
        return;
    }

    if (resposta == "sim") {
        quantidadeSim = quantidadeSim + 1;
    }

    atual = atual + 1;
    document.getElementById("resposta").value = "";

    if (atual <= 10) {
        mostrarPergunta();
    } else {
        resultado();
    }
}

function resultado() {
    if (quantidadeSim < 5) {
        classificacao = "Inocente";
        mensagem = "As respostas não apontam indícios suficientes para responsabilizá-lo. Você está liberado, mas a investigação continua.";
    } else if (quantidadeSim == 5) {
        classificacao = "Suspeito";
        mensagem = "Algumas respostas chamaram a atenção de Patrick Jane. Ainda existem pontos que precisam ser esclarecidos.";
    } else if (quantidadeSim <= 8) {
        classificacao = "Cúmplice";
        mensagem = "As respostas indicam que você pode ter ajudado a esconder informações importantes. A investigação ainda não terminou.";
    } else {
        classificacao = "Culpado";
        mensagem = "As respostas levantaram fortes suspeitas sobre sua participação no caso. Patrick Jane acredita que descobriu a verdade.";
    }

    document.getElementById("pergunta").innerHTML = "Classificação: " + classificacao + "<br>" + mensagem;
    document.getElementById("numero").innerHTML = "Fim do interrogatório";
    document.getElementById("resultado").innerHTML = "Quantidade de respostas Sim: " + quantidadeSim;
    document.getElementById("resposta").style.display = "none";
    document.getElementById("responder").style.display = "none";
    document.getElementById("reiniciar").style.display = "inline-block";
}

function reiniciarJogo() {
    location.reload();
}
