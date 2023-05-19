function exercicio32(){
    let time1 = prompt("Digite o nome do primeiro time:");
    let time2 = prompt("Digite o nome do segundo time:");
    let gols1 = parseInt(prompt("Digite a quantidade de gols marcados pelo primeiro time:"));
    let gols2 = parseInt(prompt("Digite a quantidade de gols marcados pelo segundo time:"));
    
    // Verificação do vencedor ou empate
    if (gols1 > gols2) {
      console.log("O vencedor foi o time: "+time1+".");
    } else if (gols1 === gols2) {
      console.log("A partida deu empate.");
    } else {
      console.log("O vencedor foi o time: "+time2 +".");
    }  
}