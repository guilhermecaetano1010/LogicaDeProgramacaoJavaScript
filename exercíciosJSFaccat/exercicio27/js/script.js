function exercicio27(){
    let valor = parseInt(prompt("Digite um número: "))
    if (valor > 0) {
      document.getElementById("escreval").innerHTML = "O valor é positivo!"
    } 
    else if (valor == 0) {
      document.getElementById("escreval").innerHTML = "O valor é neutro!"  
    }
    else{
      document.getElementById("escreval").innerHTML = "O valor é negativo!"
    }
}