/**
 * Array é um tipo de vetor
 *  é uma estrutura unidirecional 
 * uma estrutura onde você consegue agrupar varios tipos de dados
 * é uma forma de agrupar multiplos valores
 * e essa é uma estrutura indexada, você acessa esses valores através de um número
 * 
 * o primeiro elemento a partir do indice 0, o segundo elemento sera o indice 1 ...
 */

const valores = [7.7, 8.9, 6.3, 9.2] // isso é um array, e ele tem 4 posições
//posições        0    1    2    3
//para separar as posições eu uso a virgula

console.log(valores[0], valores[3]); // aqui estou pegando o valores de indice 0 e de indice 3
console.log(valores.length); //o length vai me dizer quantos elementos tem no array

valores.push(false, null, 'teste'); // o push é para enviar valores pro array
console.log(valores);

console.log(valores.pop()); //ele vai pegar o ultimo valor e tirar do array
delete valores[0] //dessa forma tambem deleta valores do array dizendo em qual indice quer deletar

console.log(typeof valores); // em javascript o array é do tipo object