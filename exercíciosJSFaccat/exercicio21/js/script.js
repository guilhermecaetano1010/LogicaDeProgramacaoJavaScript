function exercicio21(){
let inicio
let fim
let duracao

inicio = parseInt(prompt("Digite o horário de início da partida:")) 

fim = parseInt(prompt("Digite o horário de término da partida:"))

if (fim < inicio) {
  duracao = (24 - inicio) + fim
} else if (fim > inicio) {
  duracao = fim - inicio
} else {
  duracao = 24
}

console.log("A duração da partida foi de: "+duracao+" hora(s).")
}