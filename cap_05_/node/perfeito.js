/*
 * 00. Elabore um programa que leia um número e verifique se ele 
 *     é ou não perfeito. Um número perfeito é aquele que é à soma
 *     dos seus divisores inteiros.   
 */

console.log("-----------------------------------");
console.log("------------- Perfect -------------");
console.log("-----------------------------------\n");

const prompt = require('prompt-sync')();
const numPerfect = parseInt(prompt('N: '));
let acumulador = '1';
let soma = 1;
for(let i = 2; i < numPerfect; i++){
    if(numPerfect % i == 0){
        acumulador += `,${i}`;
        soma += i; 
        continue;
    }
}
console.log(`Divisores de ${numPerfect}: ${acumulador} - (soma: ${soma})`);
if(soma == numPerfect){
    console.log(`${numPerfect} é um número perfeito.`);
}else{
    console.log(`${numPerfect} não é um número perfeito.`);
}