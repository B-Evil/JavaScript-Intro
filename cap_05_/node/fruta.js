/*
 * 00. Elabore um programa que leia o nome de uma fruta e um número.
 *     O programa deve repetir a exibição do nome da fruta, de acordo
 *     com o número informado. Utilize "*" para separar os nomes. 
 */
console.log("-----------------------------------");
console.log("------------- Sacolão -------------");
console.log("-----------------------------------\n");

const prompt = require('prompt-sync')();
const nameFrut = prompt("Fruta: ");
const vezes = Number(prompt("Q de vezes: "));
let message = '';
for(let i = 1; i < vezes; i++){
    message += `${nameFrut} * `;
}
console.log(message+nameFrut);