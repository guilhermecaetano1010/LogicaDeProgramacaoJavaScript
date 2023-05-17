function exercicio7(){

let anos
let meses
let dias
let totalDias

anos = parseInt(prompt("Escreva sua idade em anos:"))

meses = parseInt(prompt("Escreva o número de meses que passaram desde seu aniversário:"))

dias = parseInt(prompt("Escreva a quantidade de dias que passaram desde seu último mesversário:"))

totalDias = (anos * 365) + (meses * 30) + dias

console.log("Sua idade expressa em dias é: "+totalDias)
}