console.log("".padEnd(30, "-"))
console.log("Descubra seu Ano de nascimento:");
console.log("".padEnd(30, "_")+""+"\n")
const prompt = require('prompt-sync')();


const hoje = new Date();
const anoAtual = hoje.getFullYear();
const idade = prompt("Qual é sua idade ? ");
const anoNasc = anoAtual - idade; 
console.log("Seu ano de nascimento é: "+anoNasc);