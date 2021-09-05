// Tempo padrão preparo
// Pipoca = 10s
// Macarrão = 8s
// Carne = 15s
// Feijão = 12s
// Brigadeiro = 8s

var escolhaPrato;
var tempoPreparo;
var alterarTempoPreparo;
var tempoPreparoAlterado;
var tempoPreparoAlteradoN;
var alterar;

escolhaPrato = prompt(`
Escolha o prato que irá preparar:
1 - Pipoca: 10 segundos
2 - Macarrão: 8 segundos
3 - Carne: 15 segundos 
4 - Feijão: 12 segundos
5 - Brigadeiro: 8 segundos

Digite o número referente a sua opção:
`);

var escolhaPratoNum = parseInt(escolhaPrato);


function respostaMicroondas(){
    if (tempoPreparoAlteradoN >= tempoPreparo * 2 && tempoPreparoAlteradoN < tempoPreparo * 3){
        alert(`Ops! Sua comida queimou.`);
    } else if (tempoPreparoAlteradoN >= (tempoPreparo * 3)){
        alert(`Kabumm!`)
    } else if (tempoPreparoAlteradoN < tempoPreparo){
        alert(`Tempo insuficiente`);
        tempoPreparoAlterado = prompt(`Digite um novo tempo de preparo`);
        tempoPreparoAlteradoN = parseInt(tempoPreparoAlterado);
        respostaMicroondas();
    } else{
        alert(`Prato pronto, bom apetite!`);
    }
}

alterarTempoPreparo = function(){
    var alterar = confirm(`O tempo de preparo padrão é ${tempoPreparo} segundos, deseja continuar com este tempo padrão?`);

    if(alterar == true){
        alert('Prato pronto, bom apetite!');
    } else {
        tempoPreparoAlterado = prompt(`Digite o tempo desejado para o preparo.`);
        tempoPreparoAlteradoN = parseInt(tempoPreparoAlterado);
        respostaMicroondas();
    }

};

switch (escolhaPratoNum){
    case 1:
        tempoPreparo = 10;
        alterarTempoPreparo();
       
    break;


    case 2:
        tempoPreparo = 8;
        alterarTempoPreparo();
    break;


    case 3:
        tempoPreparo = 15;
        alterarTempoPreparo();
    break;


    case 4:
        tempoPreparo = 12;
        alterarTempoPreparo();
    break;


    case 5:
        tempoPreparo = 8;
        alterarTempoPreparo();
    break;


    default:
        alert("Prato inexistente");
}