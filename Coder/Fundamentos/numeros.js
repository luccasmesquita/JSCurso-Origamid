const peso1 = 1.0;
const peso2 = Number('2.0');

const avaliacao1 = 9.571;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media);

console.log(typeof media) // mostrando o tipo da variavel
console.log(media.toString()) // transformar o valor em string
console.log(Number.isInteger(peso1)); // para dizer se é um vaor inteiro
console.log(media.toFixed(2)) // mostrar apenas duas casa decimais