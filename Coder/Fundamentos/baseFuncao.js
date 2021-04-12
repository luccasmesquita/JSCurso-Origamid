/**
 * O que é função?
 * imagine uma função, como se fosse uma receita de bolo
 * uma função executa um processo baseado na sentença de códigos que a gente escreve
 *      # ele é um bloco de codigos
 *      # você da um nome pra esse bloco
 *      # ela recebe parâmetros de entrada(que são os ingredientes) 
 *      # e no final ela retorna um valor (o "bolo")       
 */

//Função sem retorno 
function imprimirSoma(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3);

//Função com retorno
function soma(a, b = 0) {
    return a + b
} 
console.log(soma(10, 2))
console.log(soma(7))
