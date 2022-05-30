const div = document.createElement('div') //criação de um elemento
div.innerText = "Olá"

const body = document.querySelector('body')
body.append(div) //adicionando a div no documento
body.prepend(div) //adicionando a div no documento antes de qualquer elemento
