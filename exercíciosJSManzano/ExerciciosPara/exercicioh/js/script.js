function exercicioH(){
    let base = parseInt(prompt("Digite o valor da base: "))
    let expoente = parseInt(prompt("Digite o valor do expoente: "))
    let resultado = 1;
    
    for (let contador = 1; contador <= expoente; contador++) {
      resultado= resultado * base
    }
    
    console.log("O resultado de "+base+" elevado a "+expoente+ " é igual a: "+resultado)
}