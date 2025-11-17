const prompt = require('prompt-sync')();
const saques = [];
let tentativas = 0;
console.log("Informe o valor 0 para sair do programa.");
do{
    const valor = parseFloat(prompt("Saque R$: "));
    if(valor == 0 || isNaN(valor)){break;}
    saques.push(valor);
    if(valor % 10 == 0){
        console.log(`Saque Realizado com sucesso.\n`);
    }else{
        console.log("Erro... saque inválido.");
        tentativas++;
    }
}while(true);

const saquesValidos = saques.filter((saque) => {
    return saque % 10 == 0
});
console.log("\nSaques Válidos");
console.log("-".repeat(40));
for(const saque of saquesValidos){
    console.log(saque.toLocaleString('pt-br', {
        style: 'currency', currency: 'BRL'
    }));
}
const soma = saquesValidos.reduce((total, soma) => {
    total += soma;
    return total;
}, 0);

const valorTotal = soma;
console.log("-".repeat(40));
console.log(`Total de Saques: ${valorTotal.toFixed(2)}`)
console.log(`Tentativas de Saques inválidos: ${tentativas}`);