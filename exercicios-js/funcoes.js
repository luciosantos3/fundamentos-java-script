//Função sem retorno
function imprimirSoma (a, b){
    console.log(a + b)
}

//Função com retorno
function soma (a, b = 1){
    return a + b
}
console.log(soma(3))

//Arrow function
const somar = (a, b) => {
    return a + b
}
console.log(somar(1, 1))

//Armazenando uma função em uma varaiável
const imprimirSoma2 = function(a, b) {
    console.log(a + b)
}
imprimirSoma2(2, 3)

//Arrow function reduzida.
//Função usada para instruções em apenas uma linha.
const somar2 = (a, b) => a + b
console.log(somar2(1, 5))

//Arrow function ainda menor.
const somar3 = a => console.log(a)
imprimirSoma('Variável A')

