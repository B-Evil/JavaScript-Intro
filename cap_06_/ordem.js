/*
 *  00. Programa de verificação
 */

const frm = document.querySelector("form");
const text = document.querySelector("pre");
const aviso = document.querySelector("p");
const array = [];

frm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const num = frm.inNumero.value;
    if(array.includes(num)){
        aviso.innerText = `O numero ${num} já foi digitado. Tente outro!`;
        frm.inNumero.value = "";
        frm.inNumero.focus();
        return;
    }
    array.push(num);
    const numero = `Numeros [${array.join(", ")}]`;
    text.innerText = `${"-".repeat(40)}\n${numero}`;
    frm.inNumero.value = "";
    frm.inNumero.focus();
});
frm.btVerificar.addEventListener('click', () =>{
    let message = ""; 
    for(let i = 0; i <= array.length - 1; i++){
        if(array[i] > array[i + 1]){
            message = `Atenção... Não está em ordem crescente.`
            break;
        }else{
            message = `Está em Ordem Crescente.`
        }
    }

    aviso.innerText = message;
});