const form = document.querySelector('form');
const resp = document.querySelector('h3');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = form.inNome.value;
    resp.textContent = nome;
});

// Crie um programa que receba o nome do aluno 4 notas
/// Calcule a média e mostre em um h2