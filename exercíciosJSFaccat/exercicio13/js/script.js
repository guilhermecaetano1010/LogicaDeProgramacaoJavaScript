function exercicio13(){

let nota1
let nota2
let nota3
let mediaPonderada


nota1 = parseFloat(prompt("Digite a primeira nota:")) 

nota2 = parseFloat(prompt("Digite a segunda nota:"))

nota3 = parseFloat(prompt("Digite a terceira nota:")) 

mediaPonderada = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10

console.log("A média ponderada de suas notas é: "+mediaPonderada)
}