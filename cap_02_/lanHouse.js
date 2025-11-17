//obtém elementos do html -> 
const frm = document.querySelector('form');
const respValor = document.querySelector('h3');

//processamento de dados-> 
frm.addEventListener('submit', (e) =>{
    e.preventDefault();

    //obtém dados do form
    const valor_minuto = Number(frm.inValor.value);
    const lead_time = Number(frm.inTempo.value);

    const valor = Math.floor(lead_time / 15) * valor_minuto;
    const integral = Math.ceil((lead_time % 15) / 15 ) * valor_minuto;

    const total = valor + integral;
    

    const menssagem = `Valor a pagar é R$: `;
    respValor.innerText = menssagem +total;
});