let tarefas = [];

function adicionarTarefa() {
    
    // pega o input do html e faz a ligação com js
    const inputTarefa = document.getElementById("inputTarefa");
    // pega apenas o valor do input
    let tarefa = inputTarefa.value.trim(); // trim() retira os espaços no início e no final
    let mensagem = document.getElementById("mensagem");

    if (tarefa == "") {
        let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!!";
        mensagem.textContent = mensagemErro;
    } else {
        let mensagemSucesso = "Tarefa adicionada com sucesso!";
        mensagem.textContent = mensagemSucesso;

        tarefas.push(tarefa);
        rendezirarTarefas();
      
    }

    inputTarefa.value = ""; // limpar input

  }

  function rendezirarTarefas() {
    // cria novo item (li) e insere na lista (ul)
    const listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.innerHTML = "";

    for (let i = 0; i < tarefas.length; i++) {
      let novaTarefa = document.createElement("li");
      // adiciona o valor do input na tela
      novaTarefa.textContent = tarefas[i];
      listaTarefas.appendChild(novaTarefa);
      
    }
    
  }