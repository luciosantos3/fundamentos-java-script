//Novo recurso do ES2015
//Serve para desestruturar um objeto e retirar valores

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua 10',
        numero: 150
    }
}

const {nome, endereco: {numero}} = pessoa
console.log(nome, numero)