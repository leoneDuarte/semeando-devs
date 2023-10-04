function operacaoMatematica(operacao) {
    const number1 = parseFloat(document.getElementById('number1').value)
    const number2 = parseFloat(document.getElementById('number2').value)
    let resultado = 0

    if(operacao == '+'){
        resultado = number1 + number2
    }

    if(operacao == '-'){
        resultado = number1 - number2
    }

    if(operacao == '*'){
        resultado = number1 * number2
    }

    if(operacao == '/'){
        resultado = number1 / number2
    }

    document.getElementById('result').textContent = 'O resultado é: ' + resultado
}