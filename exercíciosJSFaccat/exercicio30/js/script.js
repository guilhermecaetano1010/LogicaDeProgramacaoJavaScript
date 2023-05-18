function exercicio30(){
    var valor1 = parseFloat(prompt("Digite o primeiro valor:"))
    var valor2 = parseFloat(prompt("Digite o segundo valor:"))
    var valor3 = parseFloat(prompt("Digite o terceiro valor:"))
    
    // Verificação e ordenação dos valores
    if (valor1 < valor2 && valor1 < valor3) {
      if (valor2 < valor3) {
        console.log(valor1, valor2, valor3)
      } else {
        console.log(valor1, valor3, valor2)
      }
    } else if (valor2 < valor1 && valor2 < valor3) {
      if (valor1 < valor3) {
        console.log(valor2, valor1, valor3)
      } else {
        console.log(valor2, valor3, valor1)
      }
    } else {
      if (valor1 < valor2) {
        console.log(valor3, valor1, valor2)
      } else {
        console.log(valor3, valor2, valor1)
      }
    }
}