// Crie um programa, que leia dois valores numericos 
// do usuária e em seguida, calcule a sua soma.
// Em seguida, valide se o resultado da soma
// for maior que 5, então escreva a mensagem "Passou do limite".
// Senão, escreva a mensagem "Dentro do limite"

// ENTRADA
// 1- obter um valor e guardar uma variavel chamada valor1
// 1- obter um valor e guardar uma variavel chamada valor2
const valor1 = Number(prompt("Primeiro valor:"))
const valor2 = Number(prompt("Primeiro valor:"))
console.log(valor1, valor2)

// PROCESSAMENTO
// 3- Somar os valores das variaveis valor1 e valor2 
// e guardar em uma variavel chamada resultado
const resultado = valor1 + valor2
console.log(resultado)

// 4- Validar se o resultado da soma dor maior que 5
// e escrever a mensagem "Passou do limite".
// Senão, escrever a mensagem "Dentro do limite"
// se resultado for maior que 5, então escreva a mensagem "Passou do limite"
// senão, escreva a mensagem "Dentro do limite"
let mensagem = ""

if (resultado > 5) {
mensagem = "Passou do limite"
} else {
    mensagem = "Dentro do limite"
}

const percentual = (valor1 * 0.10) / valor2

// se o percentual for maior ou igual a 10
// então, mude a mensagem para Percentual OK
// senão, mude a mensagem para Percentual Alterado

if ((percentual > 10) && (percentual === 10)) {

}

if (percentual >= 10) {
mensagem = "Persentual OK"
} else {
    mensagem = "Persentual Alterado"
}


// SAÍDA
// 5- Imprimir a mensagem de acordo.
const divRoot = document.getElementById("root")
divRoot.appendChild(document.createTextNode(mensagem))
