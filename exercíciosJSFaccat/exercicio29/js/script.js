function exercicio29(){
    let valor1, valor2, valor3, maior1, maior2, soma;

valor1 = parseFloat(prompt("Digite o primeiro valor:"))

valor2 = parseFloat(prompt("Digite o segundo valor diferente do primeiro:"))

valor3 = parseFloat(prompt("Digite o terceiro valor diferente dos dois últimos:"))

if (valor1 < valor2 && valor1 < valor3) {
  maior1 = valor2
  maior2 = valor3
} else if (valor2 < valor3) {
  maior1 = valor1
  maior2 = valor3
} else {
  maior1 = valor1
  maior2 = valor2
}

soma = maior1 + maior2
console.log("A soma dos dois maiores é: "+soma + ".")
}