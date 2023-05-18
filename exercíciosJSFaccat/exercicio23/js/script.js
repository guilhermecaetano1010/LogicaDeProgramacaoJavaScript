function exercicio23(){
let sexo, nome;
let pesoIdeal, altura;
    
    nome = prompt("Digite seu nome:")
    
    sexo = prompt("Digite seu sexo (M ou F):")
    
    altura = parseFloat(prompt("Digite sua altura em metros:"))
    
    if (sexo === "M") {
      pesoIdeal = 72.7 * altura - 58
    } else {
      pesoIdeal = 62.1 * altura - 44.7
    }
    
    console.log("Seu peso ideal é: "+pesoIdeal)   
}