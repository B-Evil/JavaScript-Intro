/*
 *          writing
 */

const frm = document.querySelector("form");
const resp1 = document.querySelector("h2");
const resp2 = document.querySelector("h3");
const resp3 = document.querySelector("h4");

frm.addEventListener('submit', (e) =>{
    e.preventDefault(); 
    const modelo = frm.inModelo.value; 
    const ano = frm.inAno.value; 
    const valor = frm.inValor.value; 
    const classificacao = ClassificacaoVeiculo(ano);
    const entrada = CalcularEntrada(valor, classificacao);
    const parcela = (valor - entrada) / 10;

    resp1.innerText = `${modelo} - ${classificacao}`; 
    resp2.innerText = `Entrada R$: ${entrada.toFixed(2)}`;
    resp3.innerText = `10x R:  ${parcela}`; 
});

function ClassificacaoVeiculo(ano) {
    let thisYear = new Date().getFullYear();
    let classificacao = '';
    if(ano == thisYear){
        classificacao = 'Novo';
    }else if ((ano - 1 ) == thisYear || (ano - 2) == thisYear){
        classificacao = 'Seminovo';
    }else{
        classificacao = 'Usado';
    }

    return classificacao;
}

function CalcularEntrada (entrada, ano) {
    let valor = ano == "Novo" ? entrada * 0.5 : entrada * 0.3;
    return valor;
}