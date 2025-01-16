const numeroSecreto = Math.floor(Math.random() * 10) + 1;
const tentativas = 10;

console.log(numeroSecreto);

for(let i = 0; i < tentativas; i++) {

    let chute = parseInt(prompt("Digite um número de 1 a 10"));
    console.log(chute);

    if(isNaN(chute) || chute < 1 || chute > 10) {
        alert("Digite um número entre 1 a 10");
        continue;
    }

    if (chute === numeroSecreto) {
        alert("Parabéns! você acertou o número secreto!")
        break;
    }  else {
        alert("Tente novamente!");
    }
} 