const elementoPai = document.querySelector(".container")

function adicionaItem(event) {
    event.preventDefault()

    const novoItem = document.createElement("article")
    const novoConteudo = document.createTextNode("Novo Item")

    novoItem.appendChild(novoConteudo)
    elementoPai.insertAdjacentElement("beforeend", novoItem)
    novoItem.setAttribute("class","estiloNovo")
    novoItem.setAttribute("onclick", "removeItem(event)")
}

function removeItem(event) {
    event.target.remove()
}