function adicionarTarefa(tarefas, titulo) {
  if (!titulo || !titulo.trim()) return tarefas

  return tarefas.concat({
    titulo: titulo.trim(),
    concluida: false
  })
}

function concluirTarefa(tarefas, posicao) {
  const novaLista = [...tarefas]

  if (novaLista[posicao]) {
    novaLista[posicao] = {
      ...novaLista[posicao],
      concluida: true
    }
  }

  return novaLista
}

module.exports = {
  adicionarTarefa,
  concluirTarefa
}