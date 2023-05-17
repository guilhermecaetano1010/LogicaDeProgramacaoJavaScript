function exercicio10(){
    
let valorinicial
let taxa1
let taxa2
let valorfinal

valorinicial = parseFloat(prompt("Digite o valor de fábrica do carro:")) 

taxa1 = (28 / 100) * valorinicial
taxa2 = (45 / 100) * valorinicial
valorfinal = valorinicial + taxa1 + taxa2

console.log("O valor final do carro é: "+valorfinal)
}