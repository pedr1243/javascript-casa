// criar uma funçao para informar data e hora

function atualizarTempoReal(){
    // declarar variavel onde a verar um caixa magica
    let dataAtual = new Date()
    // acesar documento
    document.getElementById('dataHora').textContent = 'Data e Hora: ' + dataAtual.toLocaleString()
}

setInterval(atualizarTempoReal, 1000)