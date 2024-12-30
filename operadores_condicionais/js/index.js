let vel = 60;
let limiteDeVelocidade = 80;

if (vel > limiteDeVelocidade) {
    console.log("Você foi multado por excesso de velocidade!")
} else {
    console.log("Você está dentro do limite de velocidade.")
}

//if else 
let idade = 20;
let idadeMinima = 18;

if (idade > idadeMinima) {
    console.log("Pode tirar a carteira");
} else {
    console.log("não pode tirar a carteira");
};

//if else if
let media = 6.7;

if (media >= 7) {
    console.log("Aprovado");
} else if (media > 5) {
    console.log("Quase passou de ano, precisa estudar um pouco mais");
} else {
    console.log("Reprovado, vai estudar");
}

// titulo de eleitor
let idadeEleitor = 66;
let idadeMinimaEleitor = 16;

if (idadeEleitor < idadeMinimaEleitor) {
    console.log("Não vota");

} else if (idadeEleitor < 18 || idadeEleitor > 65) {
    console.log("Voto opcional");

} else {
    console.log("Voto Obrigatorio");
}


