/* só existem dois valores de boolean o verdadeiro e o falso
verificar se uma expressao é verdadeira com IF e se não for ELSE
*/

var possuiGraduacao = false;

if(possuiGraduacao) {
    console.log('possui graduação')
} else {
    console.log('Não possui graduação')
}

//se colocar o operador "!" ele nega uma operação booleana, ou seja !true é igual a false

/*operadores de comparação
< Menor que
> Maior que
<= Menor ou igual a  
>= Maior ou igual a

vão sempre retornar um valor booleano


apenas um = é atribuição
O == faz comparação não tão estrita o === faz uma comparação estrita, ou seja 
os tipos de dados devem ser iguais quando usamos o ===
*/

/* Operadores Lógicos &&
&& são operadores de comparação, comprara se uma expressão e outra são verdadeiras
ele sempre vai retornar a expressão falsa, ou a ultima verdadeira
*/

true && true; //true
true && false; // false
false && true; // false
"Gato" && "Cão"; // "Cão" pois foi a ultima verdadeira 

/* Operadores Lógicos ||
|| são operadores de comparação, comprara se uma expressão ou outra é verdadeiras
se alguma das expressões forem verdadeiras, ele sempre vai retornar o verdadeiro
*/

true || true; // true
true || false; // true
false || true; // true
"Gato" || "Cão"; // "Gato" pois é a primeira verdadeira

/* Switch
com switch voce pode verificar se uma variavel é igual a diferentes valores 
utilizando o case. Caso ela seja igual, voce pode fazer alguma coisa e usar a palavra chave break;
para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.
*/

var CorFavorita = "Azul";

switch (CorFavorita) {
    case 'Azul':
        console.log("Olhe para o céu");
        break;
    case 'Verelho':
        console.log('Olhe para as rosas');
        break;
    case 'Amarelo':
        console.log("Olhe para o sol")
        break;
    default:
        console.log('Feche os olhos');    
}