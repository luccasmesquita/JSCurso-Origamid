// Tipos de dados das variaveis
//Todos são primitivos, exceto o objeto

var nome = "Luccas";
var sobreNome = "Mesquita"; // String - palavras e frases
var idade = 27; // Number - numeros 
var possuiFaculdade = false; // Boolean / verdadeiro ou falso
var time; // undefined - valor não definido
var comida = null; // valor nulo
var simbolo = Symbol(); // symbol
var novoObjeto = {}; // variavel obejeto

// Com o typeof conseguimos qual o tipo de dado

console.log(typeof nome); // vai dizer qual o tipo de dado da variavel nome

// Concatenar é juntar duas variaveis
console.log(nome + sobreNome);

//Template String / passar a expressões dentro de ${}
var gols = 1000;
var frase = `Romario fez ${gols} gols`; // colocando o ascento ao contrário eu consigo passar uma expressão
console.log(frase);

//Exercicios

var nomeEsposa = "Maryane";
console.log(typeof nomeEsposa);

var idadeEsposa = "23";

var idadeLuccas = 27;

var meuNome = "Luccas";
var meuSobrenome = "Mesquita";
console.log(`${meuNome} ${meuSobrenome}`);

var frase2 = "It`s time";
console.log(frase2)

console.log(typeof meuNome);
