function exercicioD(){
    let numeroGraos = 1
    let somatorio = numeroGraos
    let contador = 1
    
    do {
      numeroGraos = numeroGraos*2
      somatorio = somatorio + numeroGraos
      contador++
    } while (contador != 64)
    
    console.log("O somatório de grãos de trigo em um tabuleiro de xadrez é: ", somatorio)
}  
