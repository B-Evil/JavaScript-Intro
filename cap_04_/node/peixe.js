//inptus ->
const prompt = require('prompt-sync')();
console.log("-------------------------");
console.log("-----Pesque Pague------");
console.log("-------------------------");

const leads = Number(prompt("N de ingressos: "));
const valorLeads = leads * 20;
const peixes = Number(prompt("N de peixes: "));
let valorPeixe;
if(peixes > leads){
    valorPeixe = (peixes - leads) * 12;
}else{
    valorPeixe = 0;
}
console.log(`${leads} ingressos no valor de R$:${valorLeads.toFixed(2)}`);
console.log(`${peixes} peixes no valor de R$: ${valorPeixe.toFixed(2)}`);
