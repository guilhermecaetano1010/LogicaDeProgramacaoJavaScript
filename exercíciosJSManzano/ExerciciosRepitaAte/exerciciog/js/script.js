function exercicioG(){
let contador1 = 1
let contador2, numero, fatorial

do {
  numero = 2 * contador1 - 1
  fatorial = 1

  for (contador2 = 1; contador2 <= numero; contador2++) {
    fatorial =fatorial * contador2
  }

  console.log("O fatorial do número "+ numero+ " é igual a "+ fatorial)

  contador1++
} while (contador1 <= 5) // Quando contador for 5 o número será 10-1=9 então acaba.
}