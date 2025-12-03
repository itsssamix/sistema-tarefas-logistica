📝 To-Do List com Prioridade

Um pequeno projeto para treinar JavaScript.
A ideia é simples: adicionar tarefas, marcá-las como prioritárias e salvar tudo no localStorage.
Também incluí um teste unitário básico só para validar a função de verificação de texto.

🔧 Funcionalidades

- Adicionar novas tarefas

- Marcar/desmarcar como prioritária (as prioritárias sempre sobem na lista)

- Excluir tarefas

- Salvamento automático no localStorage

- Teste unitário da função de validação

🚀 Como executar
Opção 1 — Pelo navegador (mais simples)

- Só abrir o arquivo index.html.

Opção 2 — Rodar localmente
- git clone https://github.com/itsssamix/sistema-tarefas-logistica
-cd nome-do-projeto


-E abrir o index.html.

🧪 Testes

Os testes usam Jest.

Para rodar:

npm install
npm test

📂 Estrutura do projeto
/
├── index.html
├── style.css
├── script.js
├── validacao.js
├── tests/
│   └── validacao.test.js
└── .github/workflows
