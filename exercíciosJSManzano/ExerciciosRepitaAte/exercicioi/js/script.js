function exercicioI(){
    let valor, maior, menor

    maior = 0
    menor = 0
    
    do {
       valor = parseInt(prompt("Digite um valor, se for negativo o programa para:"))
    
       if (valor >= 0 && valor > maior) {
          maior = valor
       } else if (valor < 0) {
          menor = valor
       }
    
    } while (valor >= 0)
    
    console.log("O maior valor informado foi: " + maior)
    console.log("O menor valor informado foi: " + menor)
}