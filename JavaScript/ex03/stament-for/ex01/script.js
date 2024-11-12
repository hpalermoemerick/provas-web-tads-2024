const form = document.querySelector('form');
const saida = document.querySelector('pre');

form.onsubmit = (e) => {
    e.preventDefault();
    const num = Number(form.inNumero.value);
    for (let index = 1; index <= 10; index++) {
        saida.innerText += `${num} x ${index} = ${num*index}\n`;        
    }
};