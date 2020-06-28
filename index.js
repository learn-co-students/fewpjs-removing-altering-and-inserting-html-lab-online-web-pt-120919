let element = document.querySelector("main#main");
element.remove()

let newHeader = document.createElement('h1')
newHeader.id = "victory"
document.body.appendChild(newHeader)
newHeader.innerHTML = "CATHERINE is the champion"
