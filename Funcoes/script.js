/*
Ao criar uma função você pode definir parametros.
Ao executar uma função você pode passar argumentos
*/ 

function imc(peso, altura) { //o peso e altura são parametros
    const imc = peso / (altura ** 2);
    return imc;
}
console.log(imc(80, 1.80)); //80 = peso 1.80 = altura (isso são argumentos)
console.log(imc(60, 1.70)); //60 = peso 1.70 = altura (isso são argumentos) 
/* podemos separar por virgula cada parametro
podemos definir mais de um parametro ou nenhum
 */

function areaQuadrado(lado) {
    return lado * lado;
}
console.log(areaQuadrado(2));



function corFavorita() {
    if(corFavorita === 'azul') {
        console.log('Sua cor favorita é Azul');
    } else if (corFavorita === 'verde'){
        console.log('Sua cor favorita é Verde');
    } else {
        console.log('Você não gosta de nada');
    }
}
console.log(corFavorita()) /*  parenteses executa a função
se apenas definirmos a função e não executar ela, nada que estiver dentro 
dela vai acontecer
*/

/**
 *** Argumentos podem ser funções
 chamadas de callback, geralmente são funções que ocorrem apos algum evento
 */

 addEventListener('click', function(){
     console.log('Clicou');
 } )
 /* A função possui dois argumentos 
 Primeiro é a string 'click'
 Segundo é uma função anonima

 Funções anonimas são aquelas em que o nome da função não é definido
 escritas como 
 function() {}  OU  () => {} 
 */ 