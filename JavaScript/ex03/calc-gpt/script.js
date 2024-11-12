let operacao = '';
let primeiroNumero = '';
let segundoNumero = '';
const historico = [];

const operacoes = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => b === 0 ? null : a / b
};

function adicionar(numero) {
    const resultado = document.getElementById('resultado');
    resultado.value += numero;
}

function setOperacao(op) {
    const resultado = document.getElementById('resultado');
    if (resultado.value === '') return;

    primeiroNumero = parseFloat(resultado.value);
    operacao = op;
    resultado.value = '';
}

function calcular() {
    const resultado = document.getElementById('resultado');
    segundoNumero = parseFloat(resultado.value);

    if (!validaEntradas()) return;

    const total = operacoes[operacao](primeiroNumero, segundoNumero);

    if (total === null) {
        alert('Erro: Divisão por zero');
        limpar();
    } else {
        resultado.value = total;
        adicionarHistorico(total);
    }
}

function validaEntradas() {
    if (primeiroNumero === '' || segundoNumero === '' || !operacao) {
        alert('Por favor, insira números e uma operação válida.');
        return false;
    }
    return true;
}

function adicionarHistorico(total) {
    historico.push(`${primeiroNumero} ${operacao} ${segundoNumero} = ${total}`);
    atualizarHistorico();
}

function atualizarHistorico() {
    const historicoDiv = document.getElementById('historico');
    historicoDiv.innerHTML = historico.map(item => `<div>${item}</div>`).join('');
}

function limpar() {
    const resultado = document.getElementById('resultado');
    resultado.value = '';
    operacao = '';
    primeiroNumero = '';
    segundoNumero = '';
}

// Adiciona a funcionalidade de teclado
document.addEventListener('keydown', (event) => {
    if (!isNaN(event.key) || ['+', '-', '*', '/'].includes(event.key)) {
        adicionar(event.key);
    } else if (event.key === 'Enter') {
        calcular();
    } else if (event.key === 'Escape') {
        limpar();
    }
});
