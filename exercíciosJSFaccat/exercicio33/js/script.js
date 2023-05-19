function exercicio33(){
let numero1 = parseInt(prompt("Digite o primeiro número:"))
let numero2 = parseInt(prompt("Digite o segundo número:"))

// Verificação do maior número ou igualdade
if (numero1 > numero2) {
  console.log("O primeiro número é o maior: "+ numero1 +".")
} else if (numero1 === numero2) {
  console.log("Os números são iguais.")
} else {
  console.log("O segundo número é o maior: "+ numero2 +".")
}
}