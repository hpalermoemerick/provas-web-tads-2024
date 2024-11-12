// Crie um programa que receba o nome do aluno 4 notas
// Calcule a média e mostre em um h2

const form = document.querySelector('form');
const resp = document.querySelector('h2');

let mouse = document.createEvent('MouseEvent');
mouse.initMouseEvent('mousedown', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = form.inNome.value;
    const nota1 = Number(form.inNota1.value);
    const nota2 = Number(form.inNota2.value);
    const nota3 = Number(form.inNota3.value);
    const nota4 = Number(form.inNota4.value);
    const media = (nota1 + nota2 + nota3 + nota4) / 4;

    let situacao = '';
    if (media >= 7) {
        situacao = 'Aprovado(a)';
        resp.style.color = 'blue';
    } else if (media >= 4) {
        situacao = 'Recuperação';
        resp.style.color = 'green';
    } else {
        situacao = 'Reprovado(a)';
        resp.style.color = 'red';
    }

    resp.textContent = `A média do(a) aluno(a) ${nome} é: ${media.toFixed(1)}. Aluno(a) ${situacao}`;
});
