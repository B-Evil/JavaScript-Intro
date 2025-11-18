/*
 *
 */

const frm = document.querySelector('form');
const resp = document.querySelector('span')

frm.addEventListener('submit', (e) => {
    e.preventDefault();
    const mensagem = frm.inMensagem.value;
    let resposta = ``; 
    let tam = mensagem.length; 

    for(let i = 1; i < tam; i+=2){
        resposta+= mensagem.charAt(i); // ICIE
    }

    for(let i = 0; i < tam; i+= 2){ // B T O N R
        resposta+= mensagem.charAt(i);
    }

    resp.innerText = resposta;
    frm.inMensagem.value = resposta;
});

frm.btDecript.addEventListener('click', () => {
    const mensagem = frm.inMensagem.value; // ICIEBTONR
    let descript = ``; 
    let tam = mensagem.length; 
    let metade = Math.floor(tam / 2);
    if(tam % 2 == 0){
        for(let i = metade; i < tam; i++){
            descript+= mensagem.charAt(i);
            descript+= mensagem.charAt(i - metade);
        }
    }else{
        for(let i = metade; i < tam; i++){
            descript+= mensagem.charAt(i);
            descript+= mensagem.charAt(i - metade);
        }
    }

    resp.innerText = descript;
    frm.inMensagem.value = ``;
});