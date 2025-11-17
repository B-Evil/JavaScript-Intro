//obtém elementos do html ->
const frm = document.querySelector('form');
const respName = document.querySelector('h3');
const respPreco = document.querySelector('h4');

//processamento de inputs do frm -> 
frm.addEventListener('submit', (e) =>{
    e.preventDefault();

    //obtendo valores do frm -> 
    const nameCar = frm.inName.value;
    const carPreco = parseFloat(frm.inPreco.value);

    //processamento de dados-> 
    const entrada = carPreco / 2; 
    const parcela = entrada /12;

    //output -> 
    const menssage = `Entrada R$: ${entrada.toFixed(2)}\n+12x de R$: ${parcela.toFixed(2)}`; 

    respName.innerText = `Promoção: ${nameCar}`;
    respPreco.innerText = menssage;
});