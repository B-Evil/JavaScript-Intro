//get elements html -> 
const frm = document.querySelector('form');
const resp = document.querySelector('h3');
//Event -> submit
frm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const vVia = Number(frm.inVia.value);
    const vCondutor = Number(frm.inCondutor.value);
    const mLeve = ((vVia * 20)/ 100) + vVia; 
    const mGrave = ((mLeve * 20) / 100) + mLeve;
    let multa; 
    if(vCondutor >= mGrave){
        multa = `Multa Grave`; 
    }else if(vCondutor >= mLeve){
        multa = `Multa leve`;
    }else{
        multa = `Não há multas`;
    }
    resp.innerText = `Situação: ${multa}`;;
}); 