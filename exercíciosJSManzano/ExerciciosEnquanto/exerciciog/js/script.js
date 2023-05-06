function exercicioG(){
let soma = 0
let numero1 = 1
let numero2 = 1
let contador = 0

while (contador<15) {
    console.log(numero1)
    soma = numero1 + numero2
    numero1 = numero2
    numero2 = soma
    contador++
}
}


