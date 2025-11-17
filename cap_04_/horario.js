//obtém elementos do html ->
const frm = document.querySelector('form');
const resp = document.querySelector('h3');
frm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const horario = parseFloat(frm.inBrasil.value);
    let horas = horario + 5;
    if(horas > 24){
        horas = horas - 24;
    }
    resp.innerText = `Hora na França: ${horas.toFixed(2)}`;
});