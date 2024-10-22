// ### 4. Verificar Números Primos

const saidaVetor = document.querySelector("#saida-vetor");
const saidaPrimos = document.querySelector("#saida-primos");

let vetor = [];
let vetorPrimo = [];

for (let i = 0; i < 10; i++) {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    vetor.push(numeroAleatorio);

    if (ehPrimo(numeroAleatorio)) {
        vetorPrimo.push(numeroAleatorio);
    }
}

function ehPrimo(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return true;
}

saidaVetor.textContent = `Vetor: ${vetor.join(', ')}`;
saidaPrimos.textContent = `Vetor: ${vetorPrimo.join(', ')}`;
