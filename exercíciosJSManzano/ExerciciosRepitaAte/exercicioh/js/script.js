function exercicioH(){
let nomeComodo
let largura, comprimento,areaComodo
let continuar
let  areaTotal = 0

do {
  nomeComodo = prompt("Digite o nome do cômodo: ")
  largura = parseFloat(prompt("Digite a largura do cômodo: "))
  comprimento = parseFloat(prompt("Digite o comprimento do cômodo: "))

  areaComodo = largura * comprimento
  areaTotal = areaTotal + areaComodo

  console.log("A área do cômodo " + nomeComodo + " é: " + areaComodo + " metros quadrados.")

  continuar = prompt("Deseja continuar calculando novos cômodos? (SIM/NAO): ")
  continuar = continuar.toUpperCase()

} while (continuar !=="NAO")
console.log("A área total da residência é: " + areaTotal + " metros quadrados.")
}