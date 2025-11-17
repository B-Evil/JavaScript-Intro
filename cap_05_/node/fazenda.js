/*
 * 00. O número  de chinchilas de uma fazenda triplica acada ano
 *     Elabore um programa que leia o número inicial de chinchilas
 *     e anos e informe ano a ano o número médio previsto
 *     (OBS) -> número inicial deve ser maior ou igual a 2.  
 */

console.log("-----------------------------------");
console.log("------------- Fazenda -------------");
console.log("-----------------------------------\n");

const prompt = require('prompt-sync')();
const animais = parseInt(prompt('Q de Chinchilas: '));
if(animais < 2){
    console.log("Animais insuficiêntes, você precisa de um Casal.");
    return;
}
const anos = parseInt( prompt('Anos: '));
let aumento = animais;
console.log(`1 Ano - ${aumento}`); 
for(let i = 2; i <= anos; i++){
    aumento = aumento * 3;
    console.log(`${i} Ano - ${aumento} Chinchilas`); 
}
