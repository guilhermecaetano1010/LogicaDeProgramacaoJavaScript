function exercicioJ(){
 let contador = 50
 let soma = 0
 let media = 0
 while (contador<=70) {
    if (contador % 2 === 0) {
    console.log(contador)
     soma = soma+contador   
    }
    contador = contador+1
 }
 media=soma/11
 console.log("A soma dos pares é igual a: "+soma+"  A média dos pares é igual a: "+media)
}
