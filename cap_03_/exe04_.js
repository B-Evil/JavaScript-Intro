//obter entrada de dados -> 
const prompt = require('prompt-sync')();
const pesoKg = Number(prompt('Digite o peso em Kilos: '));// pesoKg -> camelCase
const consumo = Number(prompt('Consumo em gramas por dia: '));
//calculo -> 
const dias = Math.floor((pesoKg * 1000) / consumo); 
const sobras = Math.floor((pesoKg * 1000) % consumo); 
//output -> 
console.log(`Peso da Ração (kg) -> ${pesoKg}`);
console.log(`Cunsumo diário (gr) -> ${consumo}`); 
console.log(`Duração: ${dias} dias`);
console.log(`Sobra: ${sobras}`);