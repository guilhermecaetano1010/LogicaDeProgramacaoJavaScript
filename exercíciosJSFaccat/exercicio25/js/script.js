function exercicio25(){
    
let numeroConta, saldo, debito, credito, saldoAtual

numeroConta = parseFloat(prompt("Digite o número da sua conta:"))

saldo = parseFloat(prompt("Digite o saldo da sua conta:"))

debito = parseFloat(prompt("Digite seu valor de débito:"))

credito = parseFloat(prompt("Digite seu valor de crédito:"))

saldoAtual = saldo - debito + credito

if (saldoAtual < 0) {
  console.log("Seu saldo é negativo com valor de: "+saldoAtual+" reais.")
} else {
  console.log("Seu saldo é positivo com valor de: "+saldoAtual+" reais.")
}
}