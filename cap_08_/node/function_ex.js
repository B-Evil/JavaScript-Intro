/*
 *  learning Function.
 */
const prompt = require('prompt-sync')();

const situacao = (nota, media = 7) => {
    let aprovado = nota >= media ? true : false;
    return aprovado;
}


const prova1 = Number(prompt("Qual foi o valor da sua Nota ? "));
console.log(`Aprovado : ${situacao(prova1)}`);