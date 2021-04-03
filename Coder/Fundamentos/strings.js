const escola = "Cod3r";

console.log(escola.charAt(4)); // ele vai me dar a letra que esta no indice 4 dentro da string (sempre começa no indice 0)
console.log(escola.indexOf('o')); // ele vai te dizer em qual posição esta essa determinada letra
console.log(escola.substring(1)); //ele pega da primeira letra pra frente

console.log('Escola '.concat(escola).concat('!')); // concatenar é para juntar as informações
console.log('Escola ' + escola + '!'); //outra forma de concatenar
console.log(escola.replace(3, 'e')); // replace é para substiruir os valores
console.log('Ana, Maria, Pedro'.split(',')); //tranforma em array a cada virgula