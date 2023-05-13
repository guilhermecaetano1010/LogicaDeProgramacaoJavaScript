function exercicioA(){
    let numero,resultado = 0
    numero=15
    do {
        resultado = numero * numero
        console.log("O quadrado do número: "+numero+" é igual a: "+resultado)
        numero = numero + 1
    } while (numero<=200);
}