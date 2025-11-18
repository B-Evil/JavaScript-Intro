/*
 * Elobore um programa que leia a altura de uma árvore e após exiba a árvore iniciando com 2
 *   estrlas e aumentando em 2 a cada linha. 
 */

const prompt = require("prompt-sync")();
const altura = prompt("What is the tall of tree ? ");
for(let i = 0; i < altura; i++){
    const espaco = 30 + (altura - i); 
    console.log(" ".repeat(espaco)+"*".repeat(i*2));
}