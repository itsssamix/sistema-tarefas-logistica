📌 Sistema de Tarefas – Techflow Solutions
🧾 Descrição do Projeto
Este projeto consiste em um gerenciador de tarefas simples e funcional desenvolvido para a empresa fictícia Techflow Solutions. O objetivo é oferecer uma interface amigável para criação, visualização, priorização e exclusão de tarefas, com armazenamento local (via localStorage).

🎯 Objetivo e Escopo
Objetivo: Criar uma aplicação web responsiva que permita gerenciar tarefas de forma eficiente, sem necessidade de backend.

Escopo Inicial:

Adicionar tarefas.

Excluir tarefas.

Armazenar tarefas no localStorage.

Funcionalidades extras previstas:

Marcar tarefas como prioritárias com ordenação automática.

Validação de entrada mínima de texto.

🚀 Metodologia Adotada
A metodologia utilizada para o desenvolvimento foi o Kanban, organizada por meio do recurso GitHub Projects.

As tarefas foram divididas nas colunas: To Do, In Progress, Done.

Cada funcionalidade ou ajuste do projeto corresponde a uma task no quadro.

Acompanhamento visual e controle de progresso realizados no próprio GitHub.

👉 Acesse o quadro Kanban do projeto (GitHub Projects)

🛠️ Instruções para Execução
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/SEU_USUARIO/seu-repositorio.git
Acesse a pasta do projeto:

bash
Copiar
Editar
cd seu-repositorio
Execute o sistema:

Basta abrir o arquivo index.html no navegador.

Não é necessário servidor ou instalação de dependências adicionais.

📝 Justificativa para Mudança no Escopo
Data: 02/08/2025
Mudança: Adição de funcionalidade de priorização de tarefas
Motivo: Durante o uso do protótipo, identificou-se que tarefas importantes se perdiam visualmente entre as demais. Por isso, foi incluída uma opção para o usuário marcar tarefas como prioritárias, que são agora exibidas no topo da lista.
Impacto:

Novo botão de priorização (⭐/🌟)

Alterações na lógica de renderização (tarefas.sort(...))

Estilização diferenciada para tarefas prioritárias

Atualização do quadro Kanban com novas tasks relacionadas

Ajustes na documentação

📂 Estrutura de Arquivos
bash
Copiar
Editar
📁 projeto/
├── index.html         # Interface principal do sistema
├── style.css          # Estilo e layout da aplicação
├── script.js          # Lógica de manipulação de tarefas
├── validacao.js       # Validação de entrada (mínimo 3 caracteres)
└── README.md          # Documentação do projeto
👨‍💻 Tecnologias Utilizadas
HTML5

CSS3

JavaScript (ES6)

GitHub Projects (Kanban)

LocalStorage


👨‍💻 Projeto universitário — Engenharia de Software
