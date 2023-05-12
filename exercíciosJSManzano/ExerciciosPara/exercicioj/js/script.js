function exercicioJ(){
    let grauCelsius
    let grauFahrenheit

for(grauCelsius = 10; grauCelsius <= 100; grauCelsius += 10) {
  grauFahrenheit = (9 * grauCelsius + 160) / 5;
  console.log(grauCelsius + " graus Celsius é igual a " + grauFahrenheit.toFixed(2) + " graus Fahrenheit");
}
}