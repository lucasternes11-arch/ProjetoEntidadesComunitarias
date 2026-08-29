const appendItems = (items) => {
    const content = document.querySelector('#donation-content')
    const filter = document.querySelector('.form-select').value
    let filtro

    if(filter === 'todas') { filtro = items }
    else if(filter === 'urgente') { filtro = items.filter(priori => priori.prioridade === "urgente") }
    else if(filter === 'atencao') { filtro = items.filter(priori => priori.prioridade === "atencao") }
    else if(filter === 'normal') { filtro = items.filter(priori => priori.prioridade === "normal") }

    const div = document.createElement('div')
    div.classList.add('row', 'g-3', 'mb-4')
    const elements = filtro.map((item) => `<div class="col-md-6 col-xl-4">
        <article class="need-card">
          <div class="d-flex justify-content-between gap-2">
            <span class="badge-soft ${item.prioridade === "urgente" ? "red" : item.prioridade === "atenção" ? "yellow" : "green"}">${item.prioridade}</span>
            <small>${item.categoria}</small>
          </div>
          <h3>${item.nome}</h3>
          <p>Doadas: <strong>${item.doado}</strong> de ${item.quantidade} unidades.</p>
          <p>Faltam <strong>${item.quantidade - item.doado}</strong> unidades.</p>
          <button class="btn btn-sm btn-outline-primary find-button" data-id="${item.id}">Ver necessidade</button>
        </article>
      </div>
`).join('')

    div.innerHTML = elements
    content.appendChild(div)
}

export { appendItems }