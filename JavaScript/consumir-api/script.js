// Esconder formulário de pesquisa por rua
document.getElementById('rua_form').style.display = "none";

// realizar validação ao focar no input cep
const input_cep = document.getElementById('cep');
input_cep.onfocus = () => {
    input_cep.setAttribute('pattern', '\\d{8}');
    input_cep.setAttribute('maxlength', '8');
    input_cep.setAttribute('required', '');
};

function exibirFormularioRua() {
    //Exibe o formulário de busca por rua.
    document.getElementById('cep_form').style.display = "none";
    document.getElementById('rua_form').style.display = "block";
}

function exibirFormularioCEP() {
    //Exibe o formulário de busca por CEP
    document.getElementById('rua_form').style.display = "none";
    document.getElementById('cep_form').style.display = "block";
}

async function pesquisarPorCEP(cep) {
    console.log("CEP: " + cep);

    // Valida se o campo de pesquisa não está vazio.
    if (document.getElementById('cep').value === "") {
        alert("Por favor, preencha o campo CEP.");
        return;
    }

    // fazer requisição
    try {
        const URL = `https://viacep.com.br/ws/${cep}/json/`;
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
        preencherCampos(data)
    } catch (err) {
        console.error("Erro ao fazer a requisição:", err);
    }

}


function preencherCampos(data) {
    // Preenche os campos com os dados retornados da API
    document.getElementById('rua').value = data.logradouro;
    document.getElementById('bairro').value = data.bairro;
    document.getElementById('cidade').value = data.localidade;
    document.getElementById('estado').value = data.estado;
    document.getElementById('ibge').value = data.ibge;
}