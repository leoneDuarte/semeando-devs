function jogar(opcaousuario) {
    const opcoes = ['pedra', 'papel', 'tesoura']
    const escolhaComputador = opcoes[Math.floor(Math.random() * 3)]

    let resultado = ''

    if (opcaousuario == escolhaComputador) {
        resultado = 'Empate'
    } else if ((opcaousuario == 'pedra' && escolhaComputador == 'tesoura')
        || (opcaousuario == 'tesoura' && escolhaComputador == 'papel')
        || (opcaousuario == 'papel' && escolhaComputador == 'pedra')
    ) {
        resultado = 'você Ganhou!!!'
    } else {
        resultado = 'você Perdeu!!!'
    }

    document.getElementById('resultado').textContent = ' COMPUTADOR: ' + escolhaComputador + ' SUA ESCOLHA: ' + opcaousuario + ' =>>>  ' + resultado

}