const prompt = require('prompt-sync')();
const num = parseInt(prompt("Digite um número inteiro: "));
if(!Number.isInteger(num) && num < 100 &&  num >= 1000){
    console.log("Por favor, digite um número inteiro menor que 1000 e maior que 100");
    return;
}
//num -> 459
const centena = Math.floor(num / 100); 
const resto = num % 100; 
const dezena = Math.floor(resto / 10); 
const unidade = resto % 10; 
console.log(`O número (${num}) ao inverso é : ${unidade}${dezena}${centena}`);