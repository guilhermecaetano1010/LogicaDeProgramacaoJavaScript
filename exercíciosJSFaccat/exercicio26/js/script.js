function exercicio26(){
let quantidadeAtual, quantidadeMax, quantidadeMin, quantidadeMedia

quantidadeAtual = parseFloat(prompt("Digite a quantidade atual em estoque:"))

quantidadeMax = parseFloat(prompt("Digite a quantidade máxima de estoque:"))

quantidadeMin = parseFloat(prompt("Digite a quantidade mínima de estoque:"))

quantidadeMedia = (quantidadeMax + quantidadeMin) / 2

if (quantidadeAtual >= quantidadeMedia) {
  console.log("A quantidade média é: "+quantidadeMedia)
  console.log("Não efetuar a compra.")
} else {
  console.log("A quantidade média é: "+quantidadeMedia)
  console.log("Efetuar a compra.")
}
}