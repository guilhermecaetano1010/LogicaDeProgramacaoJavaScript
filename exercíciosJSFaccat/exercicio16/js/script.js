function compra(){
    let quantidade = parseFloat(prompt("Digite quantas maças gostaria"));
    let total;
    if (quantidade > 11){
       total = quantidade * 1
    }else{
         total = quantidade * 1.30
        }
        alert("O total da sua compra foi de: "+total.toFixed(2))   //Dois números depois da vírgula 
}
