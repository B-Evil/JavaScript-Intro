//obtém elementos html ->
const frm = document.querySelector("form");
const respH3 = document.querySelector("h3");

frm.addEventListener('submit', (e) =>{
    e.preventDefault(); 
    const base = Number(frm.inBase.value);
    if(!Number.isInteger(base)){
        respH3.innerText = `Digite um número inteiro.`; 
        return;
    }
    let tabuada = ''; 
    for(let i = 0; i <= 10; i++){
        let calculo = `${base} x ${i} = ${base * i}\n`;
        tabuada += calculo; 
    }
    respH3.innerText = tabuada;
});