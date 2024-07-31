function iniciarContagem() {
    tempo = setInterval(function(){
        let cronometro = document.querySelector('.teste').innerHTML;
        cronometro = parseInt(cronometro) + 1;

        document.querySelector('.teste').innerHTML = cronometro;
        if(cronometro === 0) {
            document.querySelector('.teste').innerHTML = 'Tempo esgotado';
            pararContagem()
            document.body.style.background = 'red';

        } else {
            document.querySelector('.teste').innerHTML = cronometro;
        }
    }, 100)
}

function pararContagem() {
    clearInterval(tempo)
}


function zerar() {
    location.reload()
}
