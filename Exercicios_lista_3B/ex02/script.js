// ### 2. Contagem Regressiva

const form = document.querySelector('form');
const saida = document.querySelector('pre');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const num = Number(form.inNumero.value);

    for (let i = num; i >= 10; i--) {
        saida.textContent += `${i}\n`
    }
});
