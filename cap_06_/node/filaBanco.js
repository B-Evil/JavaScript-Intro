const prompt = require('prompt-sync')();
/*
 *    02- Elabore um programa que leia nome e idade de 'n' clientes de um banco
 *        (até ser digitado "" no nome. Após, classificação exiba os clientes em
 *        dois grupos: preferencial (apartir de 60 anos) e fila normal (até 59 anos)
 *        Informe a ordem de atendimento de acordo com a chegada dos clientes.  
 */
const lista = []; 

console.log("---------------------------------------");
console.log("------Bem-Vindo ao Banco SATOSHI-------");
console.log("---------------------------------------\n");

while(true){
    const name = prompt("Digite seu Nome: ");
    if (name == "") { break; }
    const idade = parseInt(prompt("Digite sua idade: "));
    console.log("\n");
    if (idade == 0 || isNaN(idade)) {
        console.log("Informe uma idade correta!!");
        return;
    } else {
        lista.push({ name, idade });
    }
}

const linePreferencial = lista.filter((clientes) => clientes.idade >= 60).reduce((acumulador, clientes) =>{
    return acumulador + `Nome: ${clientes.name} Idade: ${clientes.idade}\n`;
}, "");

const lineNormal = lista.filter(clientes => clientes.idade <= 59).reduce((acumulador, clientes) =>{
   return acumulador + `Nome: ${clientes.name} Idade: ${clientes.idade}\n`;
},"")

console.log("\n\nListar Preferencial\n");
console.log(linePreferencial);
console.log("-------------------------------------");
console.log(lineNormal);