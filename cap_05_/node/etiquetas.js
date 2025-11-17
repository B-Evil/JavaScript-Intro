/*
 * 00. Elabore um programa que leia o nome de um produto e o número de etiquetas
 *     a serem impressas desse produto. Exiba as etiquetas com o nome do produto
 *     com no máximo duas etiquetas por linha.
 */

console.log("-----------------------------------");
console.log("------ Etiquetas -> imprimir ------");
console.log("-----------------------------------\n");

const prompt = require('prompt-sync')();
const nameProduto = prompt('Produto: ');
const quantidade = Number(prompt('Etiquetas: '));
console.log('\n');
for(let i = 1; i <= quantidade / 2; i++){
    console.log(`${nameProduto.padEnd(20)}  ${nameProduto.padEnd(20)}`);
}
if(quantidade % 2 == 1){
    console.log(`${nameProduto}`);
}