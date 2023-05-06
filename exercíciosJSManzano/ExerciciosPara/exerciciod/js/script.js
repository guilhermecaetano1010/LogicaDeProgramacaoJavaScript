function exercicioD(){
    let soma = 0
    let numero = 0

    for (let numero = 1; numero<=500; numero++) {
    if (numero % 2 == 0) {
    soma = soma + numero
    console.log(soma)
    }
    }
    console.log("A soma dos números pares entre 1 e 500 é:"+soma)
}