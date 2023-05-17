function exercicio12(){

let temperaturaFahrenheit
let temperaturaCelcius

temperaturaFahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit:")) 

temperaturaCelcius = ((5 * temperaturaFahrenheit) - (32 * 5)) / 9

console.log("A temperatura em Celsius é: "+ temperaturaCelcius)
}