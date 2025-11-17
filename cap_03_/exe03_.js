const prompt = require('prompt-sync')();
const salario = parseFloat(prompt("Digite seu Salario: "));
const tempoDeEmpresa = parseFloat(prompt("Digite o seu tempo de empresa: "));

//processamento de dados -> 
const quadrienios = Math.floor(tempoDeEmpresa / 4);
const reajuste = (salario * quadrienios) /100; 
const newSalario = salario + reajuste; 

//output -> 
console.log(`Salário atula ${salario}`);
console.log(`Tempo (anos): ${tempoDeEmpresa}`);
console.log(`Quadriênios: ${quadrienios}`);
console.log(`Salário Final R$: ${newSalario}`);