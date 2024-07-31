function verificar() {
    let input = document.getElementById('input').value;
    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/'+ input +'/json/');
    ajax.send();

    ajax.onload = function () {
        document.querySelector('.teste').innerHTML = this.responseText;

        let obj = JSON.parse(this.responseText);

        let cidade = obj.localidade;
        let setor = obj.bairro;
        let ddd = obj.ddd;

        document.querySelector('.teste').innerHTML = `${cidade}, ${setor}, ${ddd}`;

    }

}