function exercicioF(){
    let soma = 0
    let total = 0
    let media = 0
    let numero
    do {
    numero = parseInt(prompt("Digite um número positivo: "))
    if (numero >= 0){
      soma = soma + numero
      total++
      }
    } while (numero >= 0)
    
    if (total>0){
      media = soma / total
      console.log("O somatório é igual a: " + soma)
      console.log("O total de valores lidos é: " + total)
      console.log("A média aritmética é igual a: " + media)
    } else {
      console.log("Nenhum valor válido foi lido.")
    }

}