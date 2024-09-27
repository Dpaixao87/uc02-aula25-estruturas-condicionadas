// Faça um programa que obtenha quatro notas de um aluno
// Em seguida, calcule a média simples das notas.
// Se a média for maior ou igual a 7, imprima "Aluno Aprovado".
// Senão, se a nota for maior ou igual a 5, imprima "Aluno em Recuperação"
// Senão, imprima "Aluno Reprovado"

//ENTRADA

const nota1 = Number(prompt("Informe a primeira nota"))
const nota2 = Number(prompt("Informe a primeira nota"))
const nota3 = Number(prompt("Informe a primeira nota"))
const nota4 = Number(prompt("Informe a primeira nota"))

// PROCESSAMENTO
const media = (nota1 + nota2 + nota3 + nota4) / 4

let mensagem = ""

// se a média é maior ou igual a 7, aluno aprovado
// se a média for maior ou igual a5, aluno em recuperação
// senão, aluno reprovado

if (media >=7) {
  mensagem = "Aluno Aprovado - Média" + media
} else {
  if (media >=5) {
    mensagem = "Aluno em Recuperação - Média" + media
  } else {
    mensagem = "Aluno Reprovado - Média" + media
  }
}


document.body.appendChild(document.createTextNode(mensagem))
