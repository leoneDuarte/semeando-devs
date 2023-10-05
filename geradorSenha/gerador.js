function gerarSenha() {
    const gerador = document.getElementById('gerador')
    const comprimento = document.getElementById('comprimento').value*1
    const caracteres = '10-eq)(*we(*I)qweqeqweeqweqwqqweee_(qweqweqwewIhkojasfdjnçalskfj_()*)!(*#)!_@(#'
    let senha = ''
    for (let i=0; i < comprimento; i++) {
        const randonIndex = Math.floor(Math.random() * caracteres.length)
        senha += caracteres.charAt(randonIndex)
    }

    gerador.textContent = senha
}
