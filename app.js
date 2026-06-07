const campo = document.getElementById("campo")
const lista = document.getElementById("lista")
const total = document.getElementById("total")
const pendentes = document.getElementById("pendentes")
const concluidas = document.getElementById("concluidas")

let tarefas = []

function adicionar() {
  const texto = campo.value.trim()

  if (!texto) {
    alert("Digite uma tarefa.")
    return
  }

  tarefas.push({
    titulo: texto,
    concluida: false
  })

  campo.value = ""
  renderizar()
}

function concluir(indice) {
  tarefas[indice].concluida = true
  renderizar()
}

function renderizar() {
  lista.innerHTML = ""

  tarefas.forEach((tarefa, indice) => {
    const item = document.createElement("li")

    item.innerHTML = `
      <span class="nome ${tarefa.concluida ? "feita" : ""}">
        ${tarefa.titulo}
      </span>

      <div>
        <span class="status ${tarefa.concluida ? "concluida" : "pendente"}">
          ${tarefa.concluida ? "Concluída" : "Pendente"}
        </span>

        <button onclick="concluir(${indice})">Concluir</button>
      </div>
    `

    lista.appendChild(item)
  })

  const feitas = tarefas.filter(tarefa => tarefa.concluida).length

  total.textContent = tarefas.length
  concluidas.textContent = feitas
  pendentes.textContent = tarefas.length - feitas
}

campo.addEventListener("keydown", evento => {
  if (evento.key === "Enter") adicionar()
})