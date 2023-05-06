function exercicioA(){
    let numero = parseInt(prompt("Digite o número que deseja saber a tabuada: "))
    let contador = 1
    let resultado = 0

    console.log ("Tabuada do: "+numero+".")
    while (contador<=10) {
    resultado = contador*numero
    console.log (contador+" x "+numero+" = "+resultado)
    contador++
    }
}
