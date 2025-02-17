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
      
        // VERDE #28A745
        // VERMELHO #A34743

      // cria novo item (li) e insere na lista (ul)
        const listaTarefas = document.getElementById("listaTarefas");
        let novaTarefa = document.createElement("li");

        // adiciona o valor do input na tela
        novaTarefa.textContent = tarefa;
        listaTarefas.appendChild(novaTarefa);
    }

    inputTarefa.value = ""; // limpar input


  }