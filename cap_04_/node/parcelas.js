//inputs -> 
const prompt = require('prompt-sync')();
console.log("------------------------");
console.log("---------Farmcia--------");
console.log("------------------------");
const produto = Number(prompt("Valor do produto: "));
const vezes = Math.floor(produto / 20);
const parcela = vezes == 0 ? 1 : vezes > 6 ? 6 : vezes;
const valor = produto / parcela;
console.log(`Parcelado em ${parcela}x de R$: ${valor.toFixed(2)}`); 