function exercicio11(){
let salarioFixo
let carrosVendidos
let comissaoFixa
let comissaoFixaPorCarro
let valorVendas
let porCemDeVendas
let salarioFinal


salarioFixo = parseFloat(prompt("Digite o seu salário fixo:"))

carrosVendidos = parseFloat(prompt("Digite o total de carros vendidos:")) 

comissaoFixa = parseFloat(prompt("Digite sua comissão fixa:")) 

valorVendas = parseFloat(prompt("Digite o valor total de suas vendas:")) 

comissaoFixaPorCarro = carrosVendidos * comissaoFixa
porCemDeVendas = (5 / 100) * valorVendas
salarioFinal = salarioFixo + comissaoFixaPorCarro + porCemDeVendas

console.log("O seu salário final é:", salarioFinal)
}