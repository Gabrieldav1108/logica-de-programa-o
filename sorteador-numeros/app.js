function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let initialNumber = parseInt(document.getElementById('de').value);
    let upToNumber = parseInt(document.getElementById('ate').value);
    let result = document.getElementById('resultado');

    let numbers = [];
    let number;

    for(let i=0; i<quantidade; i++){
        number = numberRandom(initialNumber, upToNumber);

        while(numbers.includes(number)){
            number = numberRandom(initialNumber, upToNumber);
        }

        numbers.push(number);
    }

    result.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numbers} </label>`;
    alterButton();
};

function alterButton(){
    let button = document.getElementById('btn-reiniciar');
    if(button.classList.contains('container__botao-desabilitado')){
        button.classList.remove('container__botao-desabilitado');
        button.classList.add('container__botao');
    }
}

function desligarBotaoReiniciar(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.add('container__botao-desabilitado'));   
}

function numberRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar(){
    document.getElementById('ate').value = '';
    document.getElementById('de').value = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    desligarBotaoReiniciar();
}