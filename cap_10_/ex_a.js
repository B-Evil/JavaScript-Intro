const frm = document.querySelector("form");
const divVelas = document.querySelector("#divVelas");

frm.addEventListener('submit', (e) => {
    e.preventDefault();
    const idade = frm.inIdade.value;
    if(Number(idade) > 120){
        alert("Digite uma idade menor ou igual a 120");
        return;
    }
    inserirElementos(idade);
    frm.inIdade.disabled = true;
});

const inserirElementos = (idade) =>{
    for(let i = 0; i < idade.length; i++){
        const imgVela = document.createElement('img');
        imgVela.src = "imgs/"+idade[i]+".jpg";
        imgVela.alt = "Vela número "+idade[i];
        imgVela.className = "vela";
        divVelas.appendChild(imgVela);
    }
};

frm.addEventListener('reset', () => {
    window.location.reload();
});