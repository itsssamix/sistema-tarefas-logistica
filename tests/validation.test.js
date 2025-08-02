const { validarTarefa } = require('../validacao');

describe('Validação de Tarefas', () => {
  test('Deve aceitar tarefa com mais de 2 caracteres', () => {
    expect(validarTarefa('Tarefa válida')).toBe(true);
  });

  test('Deve rejeitar tarefa com 2 caracteres ou menos', () => {
    expect(validarTarefa('ab')).toBe(false);
  });
});