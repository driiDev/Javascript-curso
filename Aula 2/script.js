function adicionarTarefa() {
    // let mensagem = "Tarefa adicionada com sucesso!";
          document.getElementById("mensagem").textContent = mensagem;

    let inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value;
    document.getElementById("mensagem").textContent = tarefa;

    inputTarefa.value = ""; // limpar variavel
  }