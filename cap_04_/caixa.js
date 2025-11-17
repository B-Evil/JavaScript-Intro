//get elements of html ->
const frm = document.querySelector('form');
const resp = document.querySelector('h3');
//Event -> 
frm.addEventListener('submit', (e) => { 
    e.preventDefault();
    const quantia = Number(frm.inValor.value);
    if(quantia % 10 != 0){
        resp.innerText = `O caixa não possui esse valor de saque.\nTente outro.`; 
        return;
    }
    const notasCem = Math.floor(quantia / 100 );
    let resto = quantia % 100;
    const notasCinquenta = Math.floor(resto / 50);
    const notasDez = Math.floor(resto % 50) / 10;

    resp.innerText = `Notas de R$ 100: ${notasCem}\nNotas de R$ 50: ${ notasCinquenta}\nNotas de R$ 10: ${notasDez}`;
});