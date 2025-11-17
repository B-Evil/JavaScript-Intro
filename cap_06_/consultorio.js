/*
 *     00_ Nosso programa deve controlar a lista de atendimento dos
 *          pacientes de um consultório aodontológico como se fosse 
 *          um painel de exposição em um tv do consultório.
 */
const frm = document.querySelector('form');
const espera = document.querySelector('pre');
const atendimento = document.querySelector('span');
const lista = [];

frm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const nameUser = frm.inName.value; 
    lista.push(nameUser);
    let chamada = ''; 
    for(let i = 0; i < lista.length; i++){
        chamada += `${i+1}.${lista[i]}\n`; 
    }
    espera.innerText = chamada; 
    frm.inName.value = ''; 
    frm.inName.focus();
});
frm.btAtender.addEventListener('click', ()=>{
    if(lista.length == 0){
        alert("Não há pacientes na lista de atendimento.");
        atendimento.innerText = ``; 
        return;
    }

    const atender = lista.shift();
    let chamada = ``; 
    lista.forEach((pacientes, i)=>{
        chamada += `${i+1}.${lista[i]}\n`; 
    });
    espera.innerText = chamada; 
    atendimento.innerText = atender; 
});
frm.btUrgencia.addEventListener('click', ()=>{
    if(!frm.checkValidity()){
        alert("Informe o nome do paciente para ser atendido com caráter de urgência.");
        frm.inName.focus();
        return;
    }
    const nameUser = frm.inName.value;
    lista.unshift(nameUser);
    let chamada = "";
    lista.forEach((pacientes, i) => {
        chamada += `${i+1}.${lista[i]}\n`;
    });
    espera.innerText = chamada;
    frm.inName.value = ``; 
    frm.inName.focus();
});