function exercicio36(){
    let idadeHomem1 = parseInt(prompt("Digite a idade do primeiro homem:"))
    let idadeHomem2 = parseInt(prompt("Digite a idade do segundo homem:"))
    let idadeMulher1 = parseInt(prompt("Digite a idade da primeira mulher:"))
    let idadeMulher2 = parseInt(prompt("Digite a idade da segunda mulher:"))
    
    let soma, produto;
    
    if (idadeHomem1 > idadeHomem2 || idadeMulher1 > idadeMulher2) {
      soma = idadeHomem1 + idadeMulher2
      produto = idadeHomem2 * idadeMulher1
      console.log("O maior número é: " + soma)
      console.log("O produto é: " + produto)
    } else {
      soma = idadeHomem2 + idadeMulher1
      produto = idadeHomem1 * idadeMulher2
      console.log("A soma das idades do homem mais velho com a mulher mais nova é: " + soma)
      console.log("O produto das idades do homem mais novo com a mulher mais velha é: " + produto)
    }  
}