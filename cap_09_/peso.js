const frm = document.querySelector('form');
const lista = document.querySelector('pre');

frm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const userName = frm.inNome.value; 
    const peso = Number(frm.inPeso.value);

    if(verificarAposta(peso)){
        alert("Alguém já apostou esse peso, informe outro...");
        frm.inPeso.focus();
        return;
    }

    if(localStorage.getItem("melanciaNome")){
        const melanciaNome = localStorage.getItem("melanciaNome") + ";" + userName;
        const melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso;
        localStorage.setItem("melanciaNome", melanciaNome);
        localStorage.setItem("melanciaPeso", melanciaPeso);
    }else{
        localStorage.setItem("melanciaNome", userName);
        localStorage.setItem("melanciaPeso", peso);
    }

    mostrarApostas();
    frm.reset();
    frm.inNome.focus();
});

const verificarAposta = (peso) => {
    if(localStorage.getItem("melanciaPeso")){
        const pesos = localStorage.getItem("melanciaPeso").split(";")
        return pesos.includes(peso.toString());
    }else{
        return false;
    }
};

const mostrarApostas = () =>{
    if(!localStorage.getItem("melanciaNome")){
        lista.innerText = "";
        return;
    }
    const nomes = localStorage.getItem("melanciaNome").split(";");
    const pesos = localStorage.getItem("melanciaPeso").split(";");

    let linhas = ""; 
    for(let i = 0; i < nomes.length; i++){
        linhas += nomes[i] +" - "+ pesos[i] +" gn \n";
    }

    lista.innerText = linhas;
}

window.addEventListener("load", mostrarApostas);

frm.btVencedor.addEventListener('click', ()=>{
    if(!localStorage.getItem("melanciaNome")){
        alert("Não há apostas cadastradas");
        return;
    }

    const pesoCorreto = Number(prompt("Qual é o peso da melancia?"));
    if(pesoCorreto == 0 || isNaN(pesoCorreto)){
        return
    }

    const nomes = localStorage.getItem("melanciaNome").split(";");
    const pesos = localStorage.getItem("melanciaPeso").split(";");

    let vencedorNome = nomes[0]; 
    let vencedorPeso = Number(pesos[0]);

    for(let i = 0; i <= nomes.length; i++){
        const difVencedor = Math.abs(vencedorPeso - pesoCorreto);
        const difAposta = Math.abs(Number(pesos[i]) - pesoCorreto);
        if(difAposta < difVencedor){
            vencedorNome = nomes[i];
            vencedorPeso = pesos[i];
        }
    }

    let mensagem = "Resultado - Peso Correto: "+ pesoCorreto + "gr";
    mensagem += "\n------------------------------------------------"; 
    mensagem += "\nVencedor: "+ vencedorNome;
    mensagem += "\n Aposta: " + vencedorPeso + "gr";
    alert(mensagem);
});

frm.btClear.addEventListener('click', ()=>{
    if(confirm("Confirmar exclusão de todas as apostas.")){
        localStorage.removeItem("melanciaNome");
        localStorage.removeItem("melanciaPeso");
        mostrarApostas();
    }
});