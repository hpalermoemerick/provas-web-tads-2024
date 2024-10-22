// ### 1. Números Pares em um Vetor

const saidaVetor = document.querySelector("#saida-vetor");
const numerosPares = document.querySelector("#numeros-pares");

function gerarVetor() {
    let vetor = [];
    let vetorPar = [];
    
    for (let i = 0; i < 10; i++) {
        const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        vetor.push(numeroAleatorio);

        if (numeroAleatorio % 2 == 0) {
            vetorPar.push(numeroAleatorio);
        }
    }

    console.log(vetor)
    console.log(vetorPar)
    console.log('-----------')

    saidaVetor.textContent = `Vetor: ${vetor.join(', ')}`;
    numerosPares.textContent = `Números pares: ${vetorPar.join(', ')}`;
}
