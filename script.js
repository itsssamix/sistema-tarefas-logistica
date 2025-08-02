document.addEventListener('DOMContentLoaded', () => {
    // Elementos DOM
    const form = document.getElementById('form-tarefa');
    const inputTarefa = document.getElementById('input-tarefa');
    const listaTarefas = document.getElementById('lista-tarefas');
    
    // Carrega tarefas do localStorage
    let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    
    // Função para salvar tarefas
    const salvarTarefas = () => {
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    };
    
    // Função para renderizar tarefas
    const renderizarTarefas = () => {
        listaTarefas.innerHTML = '';
        
        // Ordena: prioritárias primeiro
        tarefas.sort((a, b) => b.prioritaria - a.prioritaria);
        
        tarefas.forEach((tarefa, index) => {
            const li = document.createElement('li');
            if (tarefa.prioritaria) li.classList.add('prioritaria');
            
            li.innerHTML = `
                <span>${tarefa.texto}</span>
                <div class="task-actions">
                    <button class="priorizar-btn">
                        ${tarefa.prioritaria ? '🌟' : '⭐'}
                    </button>
                    <button class="excluir-btn">❌</button>
                </div>
            `;
            
            // Event Listeners
            li.querySelector('.priorizar-btn').addEventListener('click', () => {
                tarefas[index].prioritaria = !tarefas[index].prioritaria;
                salvarTarefas();
                renderizarTarefas();
            });
            
            li.querySelector('.excluir-btn').addEventListener('click', () => {
                tarefas.splice(index, 1);
                salvarTarefas();
                renderizarTarefas();
            });
            
            listaTarefas.appendChild(li);
        });
    };
    
    // Adicionar nova tarefa
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const texto = inputTarefa.value.trim();
        
        if (texto) {
            tarefas.push({
                texto: texto,
                prioritaria: false
            });
            salvarTarefas();
            renderizarTarefas();
            inputTarefa.value = '';
        }
    });
    
    // Renderiza tarefas ao carregar
    renderizarTarefas();
});
