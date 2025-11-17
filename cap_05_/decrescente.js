// get elements of html ->
const frm = document.querySelector('form');
const respH3 = document.querySelector('h3');
frm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const numero = parseInt(frm.inNumero.value);
    let message = "";
    for(let  i = numero; i >= 1; i--){
        message += i+", ";
    }
    respH3.innerText = message+"0"; 
});