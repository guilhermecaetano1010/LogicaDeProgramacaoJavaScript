function exercicio31(){
let valor1 = parseInt(prompt("Digite o primeiro valor:"))
let valor2 = parseInt(prompt("Digite o segundo valor:"))
let valor3 = parseInt(prompt("Digite o terceiro valor:"))

let soma1 = valor2 + valor3
let soma2 = valor1 + valor3
let soma3 = valor2 + valor1

if (valor1 >= valor2 && valor1 >= valor3 && soma1 > valor1) {
  console.log("Os valores formam um triângulo.")
} else if (valor2 >= valor1 && valor2 >= valor3 && soma2 > valor2) {
  console.log("Os valores formam um triângulo.")
} else if (valor3 >= valor1 && valor3 >= valor2 && soma3 > valor3) {
  console.log("Os valores formam um triângulo.")
} else {
  console.log("Os valores não conseguem formar um triângulo.")
}
}
