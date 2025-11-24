/*
 *  00_ Elabore um programa que leia uma frase e informe se ela é ou
 *      não um palíndromo. 
 */

const frm = document.querySelector("form");
const resp = document.querySelector("span");

frm.addEventListener('submit', (e) => {
    e.preventDefault();
    const mensagem = frm.inFrase.value.toLowerCase();
    const frase = mensagem.replace(/ /g, "");
    let palindromo = '';
    const tam = frase.length - 1;

    for(let i = tam; i >= 0; i--){
       palindromo += frase[i];
    }

    if(palindromo == frase){
        palindromo = `(${mensagem}) é um palíndromo.`;
    }else{
         palindromo = `(${mensagem}) não é um palíndromo.`;
    }

    resp.innerText = palindromo;
});