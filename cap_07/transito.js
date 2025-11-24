/*
 *  ... 
 */

const frm = document.querySelector("form");
const resp = document.querySelector("h3");
const resp2 = document.querySelector("span");

frm.addEventListener('submit', (e) => {
    e.preventDefault();
    const multa = frm.inMulta.value; //Date
    const valorM = Number(frm.inValor.value); // valor

    const dataLimite = new Date();

    const partes = multa.split("-");
    dataLimite.setDate(Number(partes[2]));
    dataLimite.setMonth(Number(partes[1] - 1));
    dataLimite.setFullYear(Number(partes[0]));

    const dia = dataLimite.getDate();

    dataLimite.setDate(dia   + 90);
    const mes = dataLimite.getMonth() + 1;
    const ano = dataLimite.getFullYear(); 

    const comDesconto = (((valorM *  20) / 100));
    const boleto = valorM - comDesconto;

    resp.innerText = "Data Limite para Pagto com Desconto: "+ (dia < 10 ? "0"+dia : dia)+" - "+(mes < 10 ? "0"+mes : mes)+" - "+ano;
    resp2.innerText = `Valor da Multa: R$ ${boleto.toFixed(2)}`;
});