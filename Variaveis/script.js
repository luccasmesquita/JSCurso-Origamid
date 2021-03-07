 /* 
    Variaveis podem iniciar com $, _, ou letrar
    São Case sensitive, a var nome é diferente de Nome pois elas reconhecem o maiusculo
    É muito usado o Camel case para nomear variaveis ex: abrirModal, nomeCompleto
    para declarar uma var do tipo string (palavras / frases) tem que ser colocadas entres aspas simples ou duplas
*/

var nome = "Luccas";
var idade = 27;
var comidaFavorita;
comidaFavorita = "Pizza"
var possuiFaculdade = false;
console.log(nome, idade, possuiFaculdade, comidaFavorita);

// Contas com variaveis
var preco = 25;
var totalComprado = 5;
var total = preco * totalComprado;
console.log(total);

//criar variaveis com virgula
var sobreNome = "Mesquita",
    cidade = "Gifhorn";

console.log(sobreNome, cidade);

//variavel sem valor
var semDefinir;
console.log(semDefinir)

 /*
  É possivel mudar o valor atribuido a uma variavel declarada com var e let
  uma variavel declarada com const não é possivel mudar
*/

var time = "Vasco";
console.log(time);

time = "Flamengo";
console.log(time)

//variaveis sem valor
 var rua = "Abreu",
     cidade,
     estado,
     pais,
     bairro;