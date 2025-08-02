document.getElementById('form-tarefa').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const input = document.getElementById('input-tarefa');
  const lista = document.getElementById('lista-tarefas');
  
  if (input.value.trim() === '') return;
  
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${input.value}</span>
    <button class="excluir">Excluir</button>
  `;
  
  lista.appendChild(li);
  input.value = '';
  
  li.querySelector('.excluir').addEventListener('click', function() {
    li.remove();
  });
});