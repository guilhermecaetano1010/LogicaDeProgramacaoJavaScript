function exercicio9(){
let salario
let reajuste
let salariofinal

salario = parseFloat(prompt("Digite seu salário atual:"))

reajuste = parseFloat(prompt("Digite o percentual de reajuste:"))

salariofinal = salario + (salario * reajuste / 100)

console.log("O seu salário com o reajuste é: "+salariofinal.toFixed(2)) //Com 2 números depois da vígula
}