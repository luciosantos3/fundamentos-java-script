let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('Os verdadeiros: ') //Todos os números inteiros, são verdadeiros, com exceção do ZERO.
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(isAtivo = true)

console.log('Os falsos.: ') //Todos os números inteiros, são verdadeiros, com exceção do ZERO.
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("Pra finalizar...")
console.log()
console.log(!!('' || null || 0 || ' ')) //imprimi o primeiro valor verdadeiro que ele encontra.

//Verifica se o valor da variável é verdadeiro, se não for, imprime a opção 'Desconhecido' que é verdadeira.
let nome = ''
console.log(nome || 'Desconhecido') 



