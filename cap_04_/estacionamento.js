//obtém elementos html -> 
const frm = document.querySelector('form');
const resp = document.querySelector('h3');
const respTroco = document.querySelector('h2');
//Event -> submit
frm.addEventListener('submit', (e) =>{ 
    e.preventDefault();
    const deposito = parseFloat(frm.inValor.value);
    let message; 
    if(deposito < 1){
        resp.innerText = `Saldo insuficiente, por favor deposite no minímo R$: 1.00`; 
        respTroco.innerText = ``;
        return;
    }
    let troco;
    if(deposito >= 3){
        message = `120`; 
        troco = deposito - 3; 
    }else if(deposito >= 1.75){
        message = `60`;
        troco = deposito - 1.75
    }else{
        message = '30';
        troco = deposito - 1;
    }

    resp.innerText = `Tempo: ${message} min`;
    if(troco > 0){
        respTroco.innerText = `Troco: ${troco.toFixed(2)}`;
    }else{
        respTroco.innerText = ``;
    }
});