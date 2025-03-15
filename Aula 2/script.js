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

      let botaoRemover = document.createElement("button");
      botaoRemover.className = "remover";
      botaoRemover.textContent = "Remover";
      botaoRemover.onclick = () => {
        removerTarefa(i);
      }

      let botaoEditar = document.createElement("button");
      botaoEditar.className = "editar";
      botaoEditar.textContent = "Editar";
      botaoEditar.onclick = () => {
        editarTarefa(i);
      }

      novaTarefa.appendChild(botaoRemover);
      novaTarefa.appendChild(botaoEditar);
      listaTarefas.appendChild(novaTarefa);
    }
  }

  function removerTarefa(i){
    tarefas.splice(i, 1)
    rendezirarTarefas();
  }

  function editarTarefa(i){
    let tarefaEditada = prompt("Edite a tarefa: ");
    if (tarefaEditada.trim != "") {
      tarefas[i] = tarefaEditada
      rendezirarTarefas();
    }
  }

  function limparLista() {
    tarefas.length = 0;
    rendezirarTarefas();
    let mensagem = document.getElementById("mensagem");
    mensagem.textContent = "Lista de tarefas limpa com sucesso!";
  }