// Objeto: propriedade e valor.
let obj = {
    nome: "Brenno",
    idade: 27,
    profissao: "programador",
    estaTrabalhando: true
}

console.log( typeof obj)
console.log(obj);

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.estaTrabalhando);

console.log("Olá meu nome é " + obj.nome + "!");

obj.idade = 20;

console.log(obj);

obj.familia = 'Alencar';

console.log(obj)