function adicionarTarefa() {
    let mensagem = "Tarefa adicionada com sucesso!";
    // pega o input do html e faz a ligação com js
    let inputTarefa = document.getElementById("inputTarefa");
    // pega apenas o valor do input
    let tarefa = inputTarefa.value;
    // exibe a mensagem na tela
    document.getElementById("mensagem").textContent = mensagem;

    let listaTarefas = document.getElementById("listaTarefas");
    // cria a lista de tarefas
    let novaTarefa = document.createElement("li");

    // adiciona o valor do input na tela
    novaTarefa.textContent = tarefa;
    
    listaTarefas.appendChild(novaTarefa);

    inputTarefa.value = ""; // limpar input
  }