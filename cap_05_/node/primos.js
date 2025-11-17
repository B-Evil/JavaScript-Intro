const prompt = require('prompt-sync')();
console.log("--------------------");
console.log("------ Primos ------");
console.log("--------------------");
console.log("Verifique se o número é primo...\n");

const num = Number(prompt("N: "));
if(num <= 1 || isNaN(num) || !Number.isInteger(num)){
    console.log("Algo deu errado! Digite um número válido e inteiro.\n");
    return;
}

let divisor = false; 
for(let i = 2; i <= num / 2; i++){
    if(num % 2 == 0){
        divisor == true; 
        break;
    }
}

if(num > 1 && !divisor){
    console.log(`O número: ${num} é primo`);
}else{
    console.log(`O número: ${num}, não é primo`);
}