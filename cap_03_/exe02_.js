//add pacote de input -> 
const prompt = require('prompt-sync')();
const carName = prompt('Digite o nome do veículo: ');
const carValue = parseFloat(prompt('Digite o Valor do veículo: '));
const entrada = carValue / 2;
const parcela =  entrada / 12;
console.log("Promoção: "+carName);
console.log(`Entrada de ${entrada.toFixed(2)}`);
console.log(`Ou 12x de ${parcela.toFixed(2)}`); 