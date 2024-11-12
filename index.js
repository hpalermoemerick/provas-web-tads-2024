const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let tarefas = ["abactae", "amora", "uva"];
let tarefas_filtradas = [];
let tarefa = "";
let id = -1;

function adicionarTarefa(nome, prioridade) {
    const obj = {
        nome, prioridade
    };
    tarefas.push(obj);
}

function editarTarefa(id, nome, prioridade) {
    let tarefa = tarefas[id];
    tarefa = { nome, prioridade };
    tarefas[id] = tarefa;
}

function deletarTarefa(id) {
    tarefas.splice(id, 1);
}

function lerTarefas(tars) {
    console.log("Nome".padEnd(10, " "));
    console.log("Prioridade".padEnd(10, " "));

    tars.forEach(t => {
        console.log(t.nome);
        console.log(t.prioridade);
    });
}

function pesquisarTarefa(nome) {
    tarefas_filtradas = tarefas.filter(t => t.nome.includes(nome));
    console.log(tarefas_filtradas);
}

const menu = `[1] Adicionar
[2] Listar
[3] Editar
[4] Deletar
[5] Sair
Opção: `;


readline.question(menu, opcao => {
    console.log(`Hi ${opcao}!`);

    console.log(tarefas);
    console.log("-----------------");
    pesquisarTarefa(opcao);

    readline.close();
});
