// Crie um programa que receba o nome do aluno 4 notas
// Calcule a média e mostre em um h2

const form = document.querySelector('form');
const resp = document.querySelector('h2');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = form.inNome.value;
    const nota1 = Number(form.inNota1.value);
    const nota2 = Number(form.inNota2.value);
    const nota3 = Number(form.inNota3.value);
    const nota4 = Number(form.inNota4.value);
    const media = (nota1 + nota2 + nota3 + nota4) / 4;
    resp.textContent = `A média do aluno ${nome} é: ${media.toFixed(1)}`;
});
