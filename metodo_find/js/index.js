let numeros = [800, 1, 2, 3, 4, 900];

let newArr = numeros.find(verificar);

function verificar(value, array, index) {
    return value >= 3;
}

console.log(newArr);

let num = [12, 343, 12, 54, 365, 12, 35, 44, 14];

const arr = num.find((value, array, index) => value > 100);

console.log(num);
console.log(arr);