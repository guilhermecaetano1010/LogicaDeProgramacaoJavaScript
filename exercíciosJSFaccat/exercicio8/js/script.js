function exercicio8(){
let eleitores
let votosBrancos
let votosNulos
let votosValidos
let porcentBrancos
let porcentNulos
let porcentValidos


eleitores = parseInt(prompt("Escreva o número de eleitores:"))

votosBrancos = parseInt(prompt("Escreva o total de votos brancos:"))

votosNulos = parseInt(prompt("Escreva o total de votos nulos:"))

votosValidos = parseInt(prompt("Escreva o total de votos válidos:")) 

porcentBrancos = (votosBrancos / eleitores) * 100
porcentNulos = (votosNulos / eleitores) * 100
porcentValidos = (votosValidos / eleitores) * 100

console.log("A porcentagem de votos brancos é: "+ porcentBrancos+" %")

console.log("A porcentagem de votos nulos é: "+ porcentNulos+" %")

console.log("A porcentagem de votos válidos é: "+ porcentValidos+" %")
}