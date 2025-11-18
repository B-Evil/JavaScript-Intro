/*
 *  Elabore um programa que solicite um número de parcelas que devem ser geradas e calcule
 *      a data de cada uma dessas parcelas, uma para cada mês, a partirdo mês seguinte ao
 *      atual.
 */

const prompt = require('prompt-sync')();
const parcela = Number(prompt("Número de parcelas: "));
const data = new Date();

for (let i = 1; i <= parcela; i++) {
    data.setMonth(data.getMonth() + 1);
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const diaZero = dia < 10 ? "0"+dia : dia;
    const mesZero = mes < 10 ? "0"+mes : mes;
    console.log(`${i} Parcelas: ${diaZero}/${mesZero}/${ano}`);
}