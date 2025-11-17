//obtém elementos do html ->
const frm = document.querySelector('form');
const resp = document.querySelector('h3');
//Event -> 
frm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const num = Number(frm.inNum.value);
    const raiz = Math.sqrt(num);
    if(Number.isInteger(raiz)){
        resp.innerText = `Square root: ${raiz}`;
    }else{
        resp.innerText = `The number is not a perfect square.`;
    }
});