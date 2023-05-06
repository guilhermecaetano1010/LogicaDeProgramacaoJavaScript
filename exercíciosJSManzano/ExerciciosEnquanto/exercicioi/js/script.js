function exercicioI(){
    let contador = 1
    let soma = 0
    let media = 0
    let numero1; let numero2; let numero3; let numero4;let numero5; let numero6;let numero7;let numero8;let numero9;let numero10;
    while (contador<=10) {  
     switch (contador) {
            case 1:
            numero1 = parseFloat(prompt("Digite o primeiro número: ")) 
            break;
            case 2:
            numero2 = parseFloat(prompt("Digite o segundo número: "))   
            break;
            case 3:
            numero3 = parseFloat(prompt("Digite o terceiro número: "))    
            break;
            case 4:
            numero4 = parseFloat(prompt("Digite o quarto número: ")) 
            break;
            case 5:
            numero5 = parseFloat(prompt("Digite o quinto número: "))  
            break;
            case 6:
            numero6 = parseFloat(prompt("Digite o sexto número: "))   
            break;
            case 7:
            numero7 = parseFloat(prompt("Digite o sétimo número: "))    
            break;
            case 8:
            numero8 = parseFloat(prompt("Digite o oitavo número: "))  
            break;
            case 9:
            numero9 = parseFloat(prompt("Digite o nono número: "))    
            break;
            case 10:
            numero10 = parseFloat(prompt("Digite o décimo número: "))   
            break;
            default:
            console.log("Erro!!")
            break;
     }
     contador ++
    }
    soma = numero1+numero2+numero3+numero4+numero5+numero6+numero7+numero8+numero9+numero10
    media = soma/10
    console.log("O resultado da somatória é: "+soma)
    console.log("O resultado da média aritmética é: "+media)
    }

