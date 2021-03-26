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

/*
Uma função pode ou não retornar um valor
quando não definimos um return, ela irá retornar undefined. O código 
interno da função é executado normalmente, independente se existir valor de return ou não
*/

/* Valores retornados 
uma função pode retornar qualquer tipo de dado e até outras funções
mas cuidado, retornar diferentes tipos de dados na mesma função não é uma boa ideia.
*/
function terceiraIdade(idade) {
    if(typeof idade !== 'number'){
        return 'Informe sua idade';
    } else if (idade >= 60) {
        return true;
    } else {
        return false
    }
}

console.log(terceiraIdade(27))

/* Escopo 
Variaveis e funções definidas dentro de um bloco {} não são visiveis fora dele.
*/
function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`
}
console.log(precisoVisitar(3));

/*
Escopo Léxico 
funções sempre conseguem acessar váriaveis que foram criadas no contexto pai
*/

var profissao = "Developer";

function dados() {
    var nome = "Luccas";
    var idade = 27;
    function outrosDados() {
        var endereco = "Germany";
        var estudando = "Front-end, Ux e Ui design";
        return `${nome}, ${idade},${endereco}, ${profissao}, ${estudando} `
    }
    return outrosDados();
}
console.log(dados());

/* Hoisting
Antes de executar uma função, o JS 'move' todas as funções declaradas para a memoria
*/
imc2 = (80, 1.90); //imc aparece no console pois tudo "sobe"

function imc2 (peso, altura) {
    const imc2 = peso / (altura**2);
    console.log(imc2)
}