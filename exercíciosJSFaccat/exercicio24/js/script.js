function exercicio24(){
let salarioFixo, valorVenda, comissaoTotal, salarioTotal;

salarioFixo = parseFloat(prompt("Digite seu salário fixo:"))

valorVenda = parseFloat(prompt("Digite o valor de sua venda:"))

if (valorVenda <= 1500) {
  comissaoTotal = (3 / 100) * valorVenda
  salarioTotal = salarioFixo + comissaoTotal
} else {
  comissaoTotal = (3 / 100) * 1500 + ((valorVenda - 1500) * 5 / 100);
  salarioTotal = salarioFixo + comissaoTotal
}

console.log("Seu salário total é de: "+salarioTotal+" reais.")
}