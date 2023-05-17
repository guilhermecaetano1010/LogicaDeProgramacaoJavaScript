function exercicio18(){

let anoAtual
let anoNascimento
let calculoIdade


anoAtual = parseInt(prompt("Digite o ano atual:"))

anoNascimento = parseInt(prompt("Digite o ano do seu nascimento:"))

calculoIdade = anoAtual - anoNascimento

if (calculoIdade < 16) {
  console.log("Você não está apto para votar.");
} else {
  console.log("Você está apto para votar.");
}
}