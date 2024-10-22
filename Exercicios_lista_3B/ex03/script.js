// ### 3. Soma de Elementos de um Vetor

const saidaVetor = document.querySelector("#saida-vetor");
const saidaSoma = document.querySelector("#saida-soma");

let vetor = [];
let soma = 0;

for (let i = 0; i < 10; i++) {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    vetor.push(numeroAleatorio);
    soma += numeroAleatorio;
}

saidaVetor.textContent = `Vetor: ${vetor.join(', ')}`;
saidaSoma.textContent = `Soma: ${soma}`;
