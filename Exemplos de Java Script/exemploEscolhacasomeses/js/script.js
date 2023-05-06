function meses(){
    let numero = parseInt(prompt("Digite o número do mês que deseja saber: "))
    switch (numero) {
        case 1:
        document.getElementById("mesesAno").innerHTML = "O número corresponde ao mês de Janeiro!"
        break;
        case 2:
        document.getElementById("mesesAno").innerHTML = "O número corresponde ao mês de Fevereiro!"
        break;
        case 3:
        document.getElementById("mesesAno").innerHTML = "O número corresponde ao mês de Março!"
        break;
        case 4:
        document.getElementById("mesesAno").innerHTML = "O número corresponde ao mês de Abril!"
        break;
        case 5:
        document.getElementById("mesesAno").innerHTML = "O número corresponde ao mês de Maio!"
        break;
        case 6:
        document.getElementById("mesesAno").innerHTML = "O número corresponde ao mês de Junho!"
        break;
        case 7:
        document.getElementById("mesesAno").innerHTML = "O número corresponde ao mês de Julho!"
        break;
        case 8:
        document.getElementById("mesesAno").innerHTML = "O número corresponde ao mês de Agosto!"
        break;
        case 9:
        document.getElementById("mesesAno").innerHTML = "O número corresponde ao mês de Setembro!"
        break;
        case 10:
        document.getElementById("mesesAno").innerHTML = "O número corresponde ao mês de Outubro!"
        break;
        case 11:
        document.getElementById("mesesAno").innerHTML = "O número corresponde ao mês de Novembro!"
        break;
        case 12:
        document.getElementById("mesesAno").innerHTML = "O número corresponde ao mês de Dezembro!"
        break;
        
        default:
        document.getElementById("mesesAno").innerHTML = "O número digitado não corresponde a nenhum mês!"
        break;
    }
}