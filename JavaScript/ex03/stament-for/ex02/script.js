const form = document.querySelector('form');
const saida = document.querySelector('h3');

form.onsubmit = (e) => {
    e.preventDefault();
    
    const nome = form.inNome.value;
    let vogais = 0;

    for (let i = 0; i < nome.length; i++) {
        const letra = nome[i].toLowerCase();
        if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") vogais++;
    }
    
    saida.innerText = `Seu nome tem ${vogais} vogais.`;
};