/*
 *  00. A copa do Mundo ocorre de 4 em 4 anos desde de 1930, exceto 
 *      nos anos de 1942 e 1946 (Segunda Guerra Mundial). Construir
 *      um programa que repita a leitura de números (anos) até ser
 *      digitado 0. Informe para cada ano se ele é ou não ano de Copa. 
 */

const prompt = require('prompt-sync')();
console.log("Anos de Copa do Mundo, DIGITE 0 PARA SAIR.");
console.log("_______________________________________________\n");

do{
    const ano = Number(prompt('Ano: '));
    if(ano == 0){
        break;
    }else if(ano == 1942 || ano == 1946){
        console.log(`${ano} não é ano de Copa do Mundo. (Segunda Guerra)`);
    }else if(ano >= 1930 && ano % 4 == 2){
        console.log(`${ano} é ano de Copa do Mundo`);
    }else{
        console.log(`${ano} não é ano de Copa do mundo.`);
    }
}while(true);