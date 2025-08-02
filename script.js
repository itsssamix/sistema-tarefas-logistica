document.getElementById('form-tarefa').addEventListener('submit', function(e) {
    e.preventDefault();
    const inputTarefa = document.getElementById('input-tarefa');
    const listaTarefas = document.getElementById('lista-tarefas');

    if (inputTarefa.value.trim() === '') return;

    // Criar novo item na lista
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${inputTarefa.value}</span>
        <button class="excluir">Excluir</button>
    `;

    listaTarefas.appendChild(li);
    inputTarefa.value = '';

    // Adicionar evento de exclusão
    li.querySelector('.excluir').addEventListener('click', function() {
        li.remove();
    });
});