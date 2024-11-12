let operacao = '';
let primeiroNumero = '';
let segundoNumero = '';

function adicionar(numero) {
    const resultado = document.getElementById('resultado');
    resultado.value += numero;
}

function setOperacao(op) {
    const resultado = document.getElementById('resultado');
    primeiroNumero = resultado.value;
    operacao = op;
    resultado.value = '';
}

function calcular() {
    const resultado = document.getElementById('resultado');
    segundoNumero = resultado.value;
    let total;

    if (operacao === '+') {
        total = parseFloat(primeiroNumero) + parseFloat(segundoNumero);
    } else if (operacao === '-') {
        total = parseFloat(primeiroNumero) - parseFloat(segundoNumero);
    } else if (operacao === '*') {
        total = parseFloat(primeiroNumero) * parseFloat(segundoNumero);
    } else if (operacao === '/') {
        total = parseFloat(primeiroNumero) / parseFloat(segundoNumero);
    }

    resultado.value = total;
    operacao = '';
    primeiroNumero = '';
    segundoNumero = '';
}

function limpar() {
    const resultado = document.getElementById('resultado');
    resultado.value = '';
    operacao = '';
    primeiroNumero = '';
    segundoNumero = '';
}
