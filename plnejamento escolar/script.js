let tarefas = [];

let totalTarefas = 0;
let tarefasConcluidas = 0;

function adicionarTarefa() {
    let nome = document.getElementById("tarefa").value;
    let materia = document.getElementById("materia").value;
    let prioridade = document.getElementById("prioridade").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome === ""|| materia === "" || prioridade === "" ) {
        mensagem.textContent = "Preencha todos os campos";
        mensagem.style.color = "red";
        return;
    }

    let duplicada = tarefas.some(function(tarefa) {
        return tarefa.nome.toLowerCase() === nome.toLowerCase();
    });

    if (duplicada) {
        mensagem.textContent = "Tarefa já existe";
        mensagem.style.color = "red";
        return;
    }

}
function adicionarInfo() {
    let elemento = {
        nome: nome,
        simbolo: simbolo,
        periodo: periodo,
        concluido: false
    };

    referencias.push(elemento);
    mensagem.textContent = "Tudo alterado com sucesso";
    mensagem.style.color = "green";

    atualizarCores();
    atualizarInfo();
    limparCampos();
}
function exibirTarefas() {

    let lista = document.getElementById("listaTarefas");
    lista.innerHTML = "";

    tarefas.forEach(function(tarefa, indice) {

        let card = document.createElement("div");
        card.className = "tarefa";

        let titulo = document.createElement("h3");
        titulo.textContent = tarefa.nome;

        let materia = document.createElement("p");
        materia.textContent = "Matéria: " + tarefa.materia;

        let prioridade = document.createElement("p");
        prioridade.textContent = "Prioridade: " + tarefa.prioridade;