function exercicio35(){
let litrosVend = parseFloat(prompt("Informe quantos litros você comprou:"))
let tipoCombustivel = prompt("Informe G para gasolina ou A para álcool:")
let aPagar

// Cálculo do valor a pagar
if (tipoCombustivel === "G") {
  if (litrosVend <= 20) {
    aPagar = (litrosVend * 3.30) - 0.03
  } else {
    aPagar = (litrosVend * 3.30) - 0.05
  }
} else if (tipoCombustivel === "A") {
  if (litrosVend <= 20) {
    aPagar = (litrosVend * 2.90) - 0.04
  } else {
    aPagar = (litrosVend * 2.90) - 0.06
  }
}

console.log("O total a pagar é: R$" + aPagar.toFixed(2))
}