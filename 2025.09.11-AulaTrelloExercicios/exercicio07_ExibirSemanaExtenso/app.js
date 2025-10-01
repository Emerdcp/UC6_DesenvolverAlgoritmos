let dataAtual = new Date()
// console.log(dataAtual.getDay())
let diaDaSemana = dataAtual.getDay()
if (diaDaSemana == 0){
    document.getElementById("resposta").innerText="Domingo"
}else if(diaDaSemana == 1){
    document.getElementById("resposta").innerText="Segunda-Feira"
}else if(diaDaSemana == 2){
    document.getElementById("resposta").innerText="Terça-Feira"
}else if(diaDaSemana == 3){
    document.getElementById("resposta").innerText="Quarta-Feira"
}else if(diaDaSemana == 4){
    document.getElementById("resposta").innerText="Quinta-Feira"
}else if(diaDaSemana == 5){
    document.getElementById("resposta").innerText="Sexta-Feira"
}else if(diaDaSemana == 6){
    document.getElementById("resposta").innerText="Sádado"
}