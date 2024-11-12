// fazer referencias aos elementos HTML
const btn_status = document.getElementById("alterar-status");
const items_dropdown = document.querySelectorAll(".dropdown-item");
const div_lista = document.getElementById("list");

// alterar o status e exibir
items_dropdown.forEach(item => {
    item.addEventListener("click", () => {
        btn_status.textContent = item.textContent;
    });
});

// variaveis
let lista_teste = [
    {
        nome: "Atividade A",
        status: "Alta"
    },
    {
        nome: "Atividade B",
        status: "Média"
    },
    {
        nome: "Atividade C",
        status: "Baixa"
    },
    {
        nome: "Atividade D",
        status: "Baixa"
    },{
        nome: "Atividade E",
        status: "Alta"
    }
];

// buscar lista ou inicializar uma nova
let lista_atividades = localStorage.getItem("lista_atividades") || lista_teste;
console.log(lista_atividades);

function exibirAtividades(lista) {
    div_lista.innerHTML = "";

    lista_teste.forEach(atividade => {
        const li_elem = `<li class="d-flex justify-content-center">
        <h3 class="text-light ms-5 pt-5">${atividade.nome} - ${atividade.status}</h3>
        <div class="d-grid gap-2 d-md-block mt-5 ms-4">
            <button class="btn btn-success" type="button"><i data-feather="edit" class="mb-1"></i> Editar</button>
            <button class="btn btn-success" type="button"><i data-feather="trash-2" class="mb-1"></i> Cancelar</button>
            <button class="btn btn-success" type="button"><i data-feather="check-square" class="mb-1"></i> Completar</button>
        </div>
    </li>`;

    div_lista.innerHTML += li_elem;
    });
}

exibirAtividades(lista_teste);
