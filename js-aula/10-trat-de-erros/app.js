document.getElementById(userForm).addEventListener('submit',function(event){
    event.preventDefault()
// criamos a variavel para ter controle do input do nome
    let nomeUsuario = document.getElementById('username').value

// aqui vamos usar o try e cath para tratar usuarios
    try {
        if (nomeUsuario === '') {
            throw new error('por favor escreva seu nome')
        }

    // msg de sucesso caso coloque o nome do usuario no campo
        alert("Olá, " + nomeUsuario + ", seu nome foi enviado")
    } catch (error) {
        alert(error.menssagem)
    }
})
