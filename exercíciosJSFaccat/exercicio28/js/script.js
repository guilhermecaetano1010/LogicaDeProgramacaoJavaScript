function exercicio28(){
    let valor1, valor2, valor3, teste1, teste2;


valor1 = parseFloat(prompt("Digite o primeiro valor:"))

valor2 = parseFloat(prompt("Digite o segundo valor diferente do primeiro:"))

valor3 = parseFloat(prompt("Digite o terceiro valor diferente dos dois últimos:"))

if (valor1 > valor2) {
  teste1 = valor1 - valor3
} else {
  teste2 = valor2 - valor3
}

if (teste1 > 0) {
  console.log("O maior valor é o primeiro!")
} else if (teste2 > 0) {
  console.log("O maior valor é o segundo!")
} else {
  console.log("O maior valor é o terceiro!")
}

}