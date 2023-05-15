function exercicioJ(){
    let dividendo, divisor, quociente

    quociente = 0
    
    console.log("Digite o dividendo: ")
    dividendo = parseInt(prompt("Digite o dividendo: "))
    
    console.log("Digite o divisor: ")
    divisor = parseInt(prompt("Digite o divisor: "))
    
    if (divisor < dividendo) {
       do {
          dividendo = dividendo - divisor
          quociente = quociente + 1;
       } while (dividendo >= divisor)
    
       console.log("O resultado inteiro da divisão é: " + quociente)
    } else {
       console.log("O resultado dessa divisão é uma fração!")
    }
}