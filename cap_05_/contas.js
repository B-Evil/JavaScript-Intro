const frm = document.querySelector('form');
const resp1 = document.querySelector('#resp1');
const resp2 = document.querySelector('#resp2');
let numContas = 0; 
let resposta = ""; 
let valorTolta = 0;

frm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const nameConta = frm.inConta.value;
    const valor = Number(frm.inValor.value);

    numContas++;
    valorTolta += valor; 
    resposta += `${nameConta} - R$: ${valor.toFixed(2)}\n`;
    resp1.innerText = `${resposta}-------------------------------------------\n`; 
    resp2.innerText = `${numContas} Conta(s) - Total R$: ${valorTolta.toFixed(2)}`;

    frm.inConta.value = ''; // apaga os elementos da box-input
    frm.inValor.value = ''; // apaga os elementos da box-input
    frm.inConta.focus(); 
});