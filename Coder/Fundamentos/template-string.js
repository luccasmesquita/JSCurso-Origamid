// o template string facilita para colocar codigo junto com strings entre outras coisas
const nome = "Luccas";
const concatenacao = "Olá " + nome + "!"; //assim era feita concatenação da forma antigas
const template = `Olá ${nome}!`; // assim se usa o template string

console.log(concatenacao, template);

console.log( `1 + 1 = ${1 + 1}`); 