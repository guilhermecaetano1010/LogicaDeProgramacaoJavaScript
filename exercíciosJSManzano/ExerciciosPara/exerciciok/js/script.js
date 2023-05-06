function exercicioK(){
   let valor, fatorial, valorFat;

   for (valor = 1; valor <= 10; valor++) {
     if (valor % 2 == 1) {
       fatorial = 1
       for (valorFat = 1; valorFat <= valor; valorFat++) {
         fatorial = fatorial*valorFat
       }
       console.log(fatorial)
     }
   }
}
