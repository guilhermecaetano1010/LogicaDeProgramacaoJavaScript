function exercicio17(){
    let nota1
    let nota2
    let media
    
    nota1 = parseFloat(prompt("Digite a primeira nota:"))
    
    nota2 = parseFloat(prompt("Digite a segunda nota:"))
    
    media = (nota1 + nota2) / 2
    
    if (media >= 6) {
      console.log("Suas notas foram: "+nota1+" e "+ nota2)
      console.log("Você foi aprovado, sua média foi: "+ media)
    } else {
      console.log("Suas notas foram: "+nota1+" e "+ nota2)
      console.log("Sua média não foi suficiente, você foi reprovado, sua média foi de: "+ media)
    }
}