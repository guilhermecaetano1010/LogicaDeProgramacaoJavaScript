function exercicioF(){
let expoentes = 0
let numero = 0
let base = parseInt(prompt("Digite o número da base da potência: "))
let expoente1 = parseInt(prompt("Digite o expoente da potência: "))
if(expoente1==0){
numero=1
}
else{
    numero=base
    expoente1=expoente1-1
    while (expoentes<expoente1) {
        numero=numero*base
        expoentes++  
    }
}
alert("O valor da potência é: "+numero)

}
