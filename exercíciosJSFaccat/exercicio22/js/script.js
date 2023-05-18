function exercicio22(){
let salarioHora
let salarioTotal
let horasTrabalhadas
let horasExtras
let salarioHoraExtra1
let salarioHoraExtra2
let salarioHoraExtraTotal


salarioHora = parseFloat(prompt("Digite o valor ganho por hora de trabalho:")) 

horasTrabalhadas = parseFloat(prompt("Digite a quantidade de horas trabalhadas em um mês:")) 


if (horasTrabalhadas <= 160) {
  salarioTotal = salarioHora * horasTrabalhadas
  console.log("O salário total do funcionário no mês é de: "+salarioTotal)
} else {
  horasExtras = horasTrabalhadas - 160
  salarioHoraExtra1 = horasExtras * salarioHora
  salarioHoraExtra2 = salarioHoraExtra1 * 0.5
  salarioHoraExtraTotal = salarioHoraExtra1 + salarioHoraExtra2
  salarioTotal = salarioHora * 160 + salarioHoraExtraTotal
  console.log("O salário final do funcionário é de: "+ salarioTotal)
}

}