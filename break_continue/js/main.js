const numeroSecreto = 17;
const tentativas = 10;

for (let i = 0; i < tentativas; i++) {
    // Calcula o número de tentativas restantes
    let tentativasRestantes = 9 - (i - 1);

    // Pede para o usuário digitar um número
    let chuteUsuario = parseInt(prompt(`Digite um número de 1 a 20. Tentativas restantes: ${tentativasRestantes}`));

    // Valida o input do usuário
    if (isNaN(chuteUsuario) || chuteUsuario < 1 || chuteUsuario > 20) {
        alert("Digite um número de 1 a 20");
        continue;
    }

    // Verifica se o usuário acertou
    if (chuteUsuario === numeroSecreto) {
        alert("Parabéns! Você acertou o número secreto!");
        break;
    }

    // Dicas sobre o número secreto
    if (chuteUsuario > numeroSecreto) {
        alert(`O número secreto é menor que ${chuteUsuario}. Você tem ${tentativasRestantes} tentativas restantes.`);
    } else if (chuteUsuario < numeroSecreto) {
        alert(`O número secreto é maior que ${chuteUsuario}. Você tem ${tentativasRestantes} tentativas restantes.`);
    }

    // Verifica se o usuário ficou sem tentativas
    if (tentativasRestantes === 0) {
        alert(`Você não tem mais tentativas! O número secreto era ${numeroSecreto}.`);
        break;
    }
}