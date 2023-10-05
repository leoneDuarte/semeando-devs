function relogio() {
    const relogio = document.getElementById('relogio')
    const data = new Date()

    const hora = String(data.getHours()).padStart(2, '0')
    const minutos = String(data.getMinutes()).padStart(2, '0')
    const segundos = String(data.getSeconds()).padStart(2, '0')

    const horaRelogio = hora + ':' + minutos + ':' + segundos

    relogio.textContent = horaRelogio
}

setInterval(relogio, 1000)