/* 
String

string é uma cadeia de caracteres 
são palavras, frases e textos

são usadas entre:
"" / aspas duplas
'' / aspas simples
`` / template strings
*/

console.log("Luccas"); // usando aspas duplas

// se for usar o texto com aspas duplas no texto, por vonta do texto tem que
//se usar aspas simples 
//ex:

console.log('Luccas "Mesquita" ');

//como template string eu consigo dar espaço entre os caracteres
// e tambem vai permitir colocar expressoes de linguagens (chamado de interpolação)
//ex:
var idade = 27;
console.log(`Luccas

Mesquita,

${idade} anos
`); // e não dara erro