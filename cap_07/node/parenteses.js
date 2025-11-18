/*
 *  Elabore um programa que leia uma fórmula matemática e analise se os parênteses 
 *     utlizados na fórmula estão corretos.
 */

const prompt = require('prompt-sync')();
const formula = prompt("Fórmula: ");
let abre = 0; 
let fecha = 0; 
for(const simbolo of formula){
    if(simbolo === "("){
        abre++;

    }else if(simbolo === ")"){
        fecha++;
    }

    if(fecha > abre){
        break;
    }
}

if(abre == fecha){
    console.log("Ok! Fórmula correta (Em relação aos parênteses)");
}else{
    console.log("Erro... fórmula incorreta");
}