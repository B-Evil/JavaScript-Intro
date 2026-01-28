const frm = document.querySelector("form");
const resp = document.querySelector("pre");
const TABELA = document.querySelector("table");
const clubes = [];

frm.addEventListener('submit', (e)=> {
    e.preventDefault();
    const time = frm.inClube.value; 
    if(time == ""){
        alert("Não há times listados. Click em novos clubes.");
        return;
    }
    clubes.push(time);

    let mensagem = "";
    for(const clube of clubes){
        mensagem += `${clube}\n`;
    }

    resp.innerText = mensagem;
    frm.reset();
});


frm.btCreat.addEventListener('click', () => {
    if(clubes.length % 2 != 0){
        alert("Adicione mais um time para montar a tabela.");
        return;
    }

    for(let i = 0; i < clubes.length / 2; i++){
        const linha = TABELA.insertRow(-1);

        const col1 = linha.insertCell(0);
        const col2 = linha.insertCell(1);

        col1.innerText = clubes[i];
        col2.innerText = clubes[i + 1];
    }

    frm.btCreat.disabled = true
    frm.inClube.disabled = true;
});

frm.btReset.addEventListener('click', () =>{
    window.location.reload();
});