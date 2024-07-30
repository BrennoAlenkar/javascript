let corpo = document.body;
function iniciarContagem() {
    tempo = setInterval(function () {
        let cronometro = document.querySelector('.teste').innerHTML;
        cronometro = parseInt(cronometro) + 1
        document.querySelector('.teste').innerHTML = cronometro
    }, 1000)
}

function parar() {
    document.querySelector('.teste').innerHTML = ' o tempo parou'
    clearInterval(tempo)
}