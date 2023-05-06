function exercicioK(){
let soma = 0
let area = 0
let parar = "sim" 
while(parar=="sim"||parar=="SIM"){
  let nome = prompt("Digite o nome do cômodo que deseja saber a área: ")
  let largura = parseFloat(prompt("Digite a largura do cômodo: "))
  let comprimento = parseFloat(prompt("Digite o comprimento do cômodo: "))
  area = largura * comprimento
  soma = soma+area
  console.log("A área do(a) "+nome+" é: "+area+" m²")
  parar = prompt("Deseja continuar calculando novos cômodos?")
}
console.log("O valor total acumulado da área residencial é: "+soma+" m²")
}
