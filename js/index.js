let iniciar = document.querySelector('.btnIniciar');
let parar = document.querySelector('.btnParar');
let zerar = document.querySelector('.btnZerar');

iniciar.onclick = function() {
    tempo = setInterval(function () {
        let cronometro = document.querySelector('.teste').innerHTML;

        cronometro = parseInt(cronometro) - 1
        document.querySelector('.teste').innerHTML = cronometro;
        if(cronometro === 0) {
            document.querySelector('.teste').innerHTML = 'O tempo esgotou'
            clearInterval(tempo);
        }
    }, 1000)

}

parar.onclick = function() {
    clearInterval(tempo);
}

zerar.onclick = function() {
    location.reload()
}