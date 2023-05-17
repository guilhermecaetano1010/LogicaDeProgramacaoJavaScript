function exercicio19(){

let numero1
let numero2

numero1 = parseFloat(prompt("Digite o primeiro número:"))
numero2 = parseFloat(prompt("Digite o segundo número:"))

if (numero1 > numero2) {
  console.log("O maior número entre os digitados é o: "+ numero1)
} else {
  console.log("O maior número entre os digitados é o: "+ numero2)
}
}