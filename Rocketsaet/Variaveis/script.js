/* 
Variaveis

    Nomes simbolicos pare receber um valor
    Atalho para codigos
    Identificadores

    3 Palavras reservadas para criar uma variavel
        var
        let
        conts
 */
 
var clima = "Quente"; // a variavel declarada recebe o valor quente (o igual é atribuição e não comparação)
clima = "Frio"; // com var e let eu posso alterar o valor durante a aplicação

console.log(clima);

const idade = 27; // a variavel criad

/**
 * Js é uma linguagem fracamente tipada e dinamica
 * Variaveis não precisam ter um tipo preciamente definidos
 * Podemos mudar o conteudo da variavel
 */

/**
 * Scope
 * 
 * O scope determina a visibilidade de aluma variavel no Js
 * 
 * O var é global e tambem local, ou seja, pode funcionar dentro e fora do escopo 
 */
console.log(x); //podemos acessar a variavel "x" fora do escopo

{
    var x = 0;
}
console.log(x)