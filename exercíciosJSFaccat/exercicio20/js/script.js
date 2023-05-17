function exercicio20(){
    let numero1
    let numero2
    
numero1 = parseFloat(prompt("Digite um número:"))
    
numero2 = parseFloat(prompt("Digite outro número:"))
    
if (numero1 > numero2) {
    console.log("Os números em ordem crescente ficam: "+ numero2+", "+ numero1+ ".");
} else {
    console.log("Os números em ordem crescente ficam: "+ numero1+", "+ numero2+ ".");
}  
}