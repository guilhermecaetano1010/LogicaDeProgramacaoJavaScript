function exercicioL(){
let numero = 0
let numeroMenor = 0
let numeroMaior=0

while (numero>=0){
numero = parseFloat(prompt("Digite um número: "))
if (numero<0) {
    numeroMenor=numero
} else if(numero>numeroMaior) {
  numeroMaior=numero   
}
}
alert("O maior número digitado foi: "+numeroMaior)
alert("O menor número digitado foi: "+numeroMenor)
}

