const escola = 'Cod3r';

console.log(escola.charAt(4)); // pega o caracter da posição a partir de zero.
console.log(escola.charAt(5)); // Fora do intervalo não da erro, devolve vazio.
console.log(escola.charCodeAt(3));
console.log(escola.indexOf(3));

console.log(escola.substring(1)); //pega a partir da da posição especifiicada, contando de zero.
console.log(escola.substring(0,3)); //Pega 0 ZERO e vai até o TRÊS sem incluí-lo. 

console.log('Escola '.concat("!"));
console.log(escola.replace(3, 'e')); //faz o replace da posição especifiicada, contando de zero.
console.log('Ana,Maria,Pedro'.split(',')) //Tranforma em array, separando a cada vez que encontra uma vírgula.
console.log();