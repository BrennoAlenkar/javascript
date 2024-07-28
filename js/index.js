

function verificar() {
    let idade = document.getElementById('idade').value;
    let res = document.querySelector('.container__resposta');

    if (idade < 16) {
        res.style.display = 'block'
        res.innerHTML = 'Não vota';
        res.style.color = 'red';

    } else if (idade < 18 || idade >= 65) {
        res.style.display = 'block'
        res.innerHTML = 'Voto Opcional'
        res.style.color = 'blue';

    } else {
        res.style.display = 'block'
        res.innerHTML = 'Voto Obrigatório';
        res.style.color = 'green';
    }
}
