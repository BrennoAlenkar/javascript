let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newArray = numeros.filter(verificar);

function verificar(value, index, array) {
    return value >= 5;

}

console.log(newArray);

let num = [11, 12, 13, 14, 15];

const arr = num.filter((value) => value > 13);

console.log(arr);
