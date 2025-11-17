//obtém elemtos do html -> 
const frm = document.querySelector('form');
const respBoletim = document.querySelector('h3');
const respResultado = document.querySelector("h4");

frm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const name = frm.inName.value; 
    const num1 = parseFloat(frm.inNota1.value);
    const num2 = parseFloat(frm.inNota2.value);
    if(num1 > 10 || num2 > 10){
        respBoletim.innerText = `Por favor insira notas de 0 a 10 `;
        frm.inNota1.value = ``; 
        frm.inNota2.value = ``;
        frm.inName.focus();
        respResultado.innerText = ``;
        return;
    }
    const avarege = (num1 + num2) / 2; 
    respBoletim.innerText = `Média das Notas ${avarege.toFixed(1)}`;
    if(avarege >= 7){
        respResultado.innerText = `Parabéns, ${name}! Você foi aprovado.`; 
        respResultado.style.color = "blue";
    }else{
        respResultado.innerText = `${name}, Você foi Reprovado.`;
        respResultado.style.color = "red";
    }
});