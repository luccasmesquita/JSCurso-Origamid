//Armazenando uma função em uma variável
const imprimirSoma = function(a, b) { //criando uma função anonima, uma função sem nome 
    console.log( a + b )
};
imprimirSoma(2 ,3)

//Armazenando uma função arrow em uma variável
const soma = (a , b) => {
    return a + b 
}
console.log(soma(5,3));

//retorno implícito - arrow function
const subtracao = (a, b) => a - b;
console.log(subtracao(5,3));
