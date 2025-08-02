# Sistema de Tarefas - LogisMax

Este é um gerenciador simples de tarefas desenvolvido com JavaScript puro (Vanilla JS). O sistema permite adicionar, priorizar e excluir tarefas, além de armazená-las localmente no navegador. Também conta com testes automatizados utilizando **Jest** e integração contínua via **GitHub Actions**.

---

## 🚀 Funcionalidades

- ✅ Adicionar novas tarefas
- 🌟 Priorizar tarefas com destaque visual
- ❌ Excluir tarefas
- 💾 Armazenamento local com `localStorage`
- 🧪 Testes unitários com Jest
- 🔁 CI com GitHub Actions (testes rodam automaticamente a cada push)

---

## 🛠 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- [Jest](https://jestjs.io/) — Testes unitários
- GitHub Actions — Integração contínua

---

## 📁 Estrutura do Projeto

sistema-tarefas-logistica/
├── index.html # Página principal
├── script.js # Lógica da aplicação
├── validação.js # Validação de tarefas (exportada para testes)
├── tests/
│ └── validation.test.js # Testes unitários
├── package.json # Configurações do projeto Node.js e dependências
└── .github/
└── workflows/
└── test.yml # Pipeline de testes automatizados

yaml
Copiar
Editar

---

## ▶️ Como Executar Localmente

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/sistema-tarefas-logistica.git
cd sistema-tarefas-logistica
Instale as dependências:

bash
Copiar
Editar
npm install
Execute os testes:

bash
Copiar
Editar
npm test
Abra o arquivo index.html no navegador para usar o gerenciador de tarefas.

✅ Testes Automatizados
Este projeto inclui testes automatizados usando Jest. A função validarTarefa é testada para garantir que o texto da tarefa tenha pelo menos 3 caracteres.

Além disso, o repositório está integrado ao GitHub Actions, que executa os testes automaticamente a cada push ou pull request para a branch main.

📄 Licença
Este projeto foi desenvolvido para fins acadêmicos. Sinta-se livre para utilizar como referência educacional.

✍️ Autor
Samir (ou seu nome completo aqui)
👨‍💻 Projeto universitário — Engenharia de Software
