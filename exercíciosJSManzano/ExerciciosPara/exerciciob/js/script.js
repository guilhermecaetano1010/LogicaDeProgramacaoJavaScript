function exercicioB(){
    let contador = 1
    let numero = parseInt(prompt("Digite o número que deseja a tabuada: "))
    let resultado = 0
    console.log("Tabuada do "+numero+".")
    for (contador = 1; contador<=10; contador++) {
    resultado = contador*numero
    console.log(numero+" x "+contador+" = "+resultado)
    }
}