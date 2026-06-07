const { adicionarTarefa, concluirTarefa } = require("../src/tarefas")

test("adiciona tarefa válida", () => {
  const tarefas = adicionarTarefa([], "Estudar")

  expect(tarefas).toHaveLength(1)
  expect(tarefas[0].titulo).toBe("Estudar")
  expect(tarefas[0].concluida).toBe(false)
})

test("não adiciona tarefa vazia", () => {
  const tarefas = adicionarTarefa([], "   ")

  expect(tarefas).toHaveLength(0)
})

test("conclui tarefa", () => {
  const tarefas = adicionarTarefa([], "Fazer atividade")
  const resultado = concluirTarefa(tarefas, 0)

  expect(resultado[0].concluida).toBe(true)
})