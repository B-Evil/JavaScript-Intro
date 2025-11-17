/*
 *  00. Elabore um programa para um loja que leia um valor 
 *      de uma conta e o número de vezes que um cliente
 *      deseja parcelar----- esse valor (em boletos ou carnês)
 *      Para facilitar o troco, o lojista deseja que as 
 *      parcelas iniciais  não tenham centevos, ou seja,
 *      centevos apenas na última parcela.
 */
console.log("----------------------------------");
console.log("-------------- Loja --------------");
console.log("----------------------------------\n")

const prompt = require('prompt-sync')();
const valueSales = Number(prompt('Valor: '));
const numParcelas = Number(prompt('Q parcelas: '));

const parcelas = valueSales / numParcelas;
for(let i = 1; i < numParcelas; i++){
    console.log(`${i} - parcela: R$: ${Math.floor(parcelas.toFixed(2))}`);
}
console.log(`${numParcelas} - parcela: R$: ${parcelas.toFixed(2)}`);