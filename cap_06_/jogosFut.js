const frm = document.querySelector('form');
const text = document.querySelector('pre');
const clube = [];

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameClub = frm.inClube.value;
    if(nameClub == ""){
        frm.btListar.dispatchEvent(new Event('click'));
        return;
    }
    clube.push(nameClub);
    frm.inClube.value = "";
    frm.inClube.focus();
    frm.btListar.dispatchEvent(new Event('click'));
});

frm.btListar.addEventListener('click', () => {
    if(clube.length == 0){
        text.innerText = `Não há clubes listados.`;
        frm.inClube.focus();
        return;
    }
    const lista = clube.reduce((acumulador, clubes) => {
        acumulador += `${clubes}\n`;
        return acumulador;
    },"");
    text.innerText = `${"-".repeat(40)}\n${lista}`;
});

frm.btTabela.addEventListener('click', () => {
    if(clube.length  % 2 >= 1){
        text.innerText = `Não há clubes o suficiênte para Monatar uma Chave.`;
        frm.inClube.focus();
        return;
    }
    let chave = "";
    let tamanho = clube.length - 1;
    for (let i = 0; i < clube.length / 2; i++) {
        chave += `${clube[i]} x ${clube[tamanho - i]}\n`;
    }
    text.innerText= `${'-'.repeat(40)}\n${chave}`;
    frm.inClube.value = "";
    frm.inClube.focus();
});