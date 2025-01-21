const cotacaoDolar = () => {
    let valorUsuarioReal = document.getElementById("valorReal").value;
    let valorUsuarioDolar = document.getElementById("cotacaoDolar").value;
    let res = document.querySelector(".res");

    let valorReal = parseFloat(valorUsuarioReal);
    let valorDolar = parseFloat(valorUsuarioDolar);

    let soma = valorReal * valorDolar;

    if (isNaN(valorReal) || isNaN(valorDolar)) {
        alert("Digite um número válido!");
    }

    if (valorDolar > 6.03 || valorDolar < 6.03) {
        alert(`Esse valor dolar não está certo! o correto é $6,03! Digite corretamente`)
    } else {

        res.innerHTML = `Covertendo o valor real de $${valorReal.toFixed(2)}, com o dolar em 6,03, vai ficar em $:${soma.toFixed(2)} reais!`

    }
}
