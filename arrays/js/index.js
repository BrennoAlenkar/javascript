// array de numeros
let numeros = [10, 100, 2, 60,1];

console.log(numeros);

console.log(typeof numeros);

console.log(numeros[0]);

console.log(numeros[1]);

// array de string
let familia = ["Kaio", "Marcia", "Eduardo", "Thays", "Yasmin"];


familia[1] = "Jesus";

familia[5] = "Cristo";

console.log(familia);

console.log(familia[1]);

//array com um objeto dentro, podemos colocar qualquer tipo
let arr = ["Brenno", 27, "Programador", 4400, true, {nome: "Jesus", carro: "Onix"}];

console.log(arr);

document.querySelector('h1').innerHTML = `Olá meu nome é ${arr[0]}, tenho ${arr[1]}anos de idade, e meu senhor é o ${arr[5].nome} que é o Cristo`;