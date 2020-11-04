//Contexto léxico 1 (Endereço físico da constante)
const saudacao = 'Opa'

//Contexto lexico 2 (Endereço físico da constante)
//Não exite conflito para o mesmo nome, pq a constante "saudacao" esta no contexto function.
function exec() {
    const saudacao = 'Falaaa'
    return saudacao
}

//Objetos são grupos de chave/valor

const cliente = {
    nome: 'Pedro',
    idade: 34,
    peso: 90,
    endereco: {
        logradouro: 'Rua da Paz',
        numero: 120
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)