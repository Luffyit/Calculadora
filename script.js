const visor = document.querySelector('p')
const num = document.querySelectorAll('.btn')
const c = document.querySelector('.c')

function clicked(param){
   visor.innerHTML += param
}
function limpa(){
    visor.innerHTML = ''
}
function apaga(){
    let len = visor.innerHTML.length
    visor.innerHTML = visor.innerHTML.slice(0,len-1)
}
function resultado(){
    visor.innerHTML = eval(visor.innerHTML)
}