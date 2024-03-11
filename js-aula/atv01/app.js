
let botao = document.getElementById('btn')
    botao.style.border = '1px solid red'
    botao.style.cursor = 'pointer'

botao.addEventListener('click', function (evento){
    alert('Você está fuçando onde não deve')
})