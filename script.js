const visor = document.querySelector('p')
const num = document.querySelectorAll('.btn')
const c = document.querySelector('.c')

function clicked(param){
   visor.innerHTML += param
}
function limpa(){
    visor.innerHTML = ''
    console.log('aqui')
}
function resultado(){
    conta = Number(visor.innerHTML)
    console.log(typeof conta)
}