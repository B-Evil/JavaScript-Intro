const frm = document.querySelector('form');
const resp = document.querySelector("h3");

const TAXA_MULTA = 2 / 100;
const TAXA_JUROS = 0.33 / 100;

frm.addEventListener('submit', (e) => {
    e.preventDefault();
    const dataVenc = frm.inVencimento.value; 
    const contaValor = Number(frm.inValor.value);
    const hoje = new Date(); 
    const vencto = new Date(); 

    const partes = dataVenc.split("-");
    vencto.setDate(Number(partes[2]));
    vencto.setMonth(Number(partes[1] - 1));
    vencto.setFullYear(Number(partes[0]));
    console.log(vencto)

    const atraso = hoje - vencto; 
    let multa = 0; 
    let juros = 0; 
    
    if(atraso > 0){
        const dias = atraso / 86400000;
        multa = contaValor * TAXA_MULTA;
        juros = contaValor * TAXA_JUROS * dias;
    }

    const total = contaValor + multa + juros;

    frm.outMulta.value= multa.toFixed(2);
    frm.outJuros.value= juros.toFixed(2);
    frm.outTotal.value= total.toFixed(2);
})