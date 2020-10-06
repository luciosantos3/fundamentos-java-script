const valores = [7.7, 8.9, 6.3, 9,2]
console.log(valores[0], valores[3])

valores[10] = 10 //Ex: de como fica o array depois de inserir item pulando posições.
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') // A função 'push' serve para adicionar valores em um array.
console.log(valores)

//Retira o último valor do array e o retorna. A posição do Array é substituída por null.
//Resultado depois da função[7.7, 8.9, 6.3, 9, 10, { id: 3 }, false, null]
console.log(valores.pop())
console.log(valores)

console.log(typeof valores)

//Outra maneira de deletar do array pela posição.
delete valores[0]
console.log(valores)