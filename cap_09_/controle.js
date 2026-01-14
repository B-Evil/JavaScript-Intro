const frm = document.querySelector('form');
const resp = document.querySelector('pre');
const count = document.querySelector("h4");

frm.addEventListener('submit', (e)=> {
    e.preventDefault();
    const produto = frm.inServico.value.toUpperCase();

    if(!localStorage.getItem('produtos')){
        localStorage.setItem('produtos', produto);
    }else{
        const tarefas = localStorage.getItem('produtos') + ";" + produto
        localStorage.setItem('produtos', tarefas);
    }

    verificarServico();
    frm.reset();
    frm.inServico.focus();
})

const addServico = () => {
    if(!localStorage.getItem('produtos')){
        localStorage.setItem('produtos', produto);
    }else{
        const tarefas = localStorage.getItem('produtos') + ";" + produto
        localStorage.setItem('produtos', tarefas);
    }
}

const verificarServico = () => { 
    if(!localStorage.getItem('produtos')){
        count.innerText = `Serviços: 0`;
        return true;
    }
    const servicos = localStorage.getItem('produtos').split(';');
    const counter = servicos.length;
    count.innerText = `Serviços: ${counter}`;
}
window.addEventListener('load', verificarServico);

const removeServico = () => {
    const servico = localStorage.getItem('produtos').split(';');
    localStorage.removeItem('produtos');
    const execucao = servico[0];
    servico.shift();

    for(let i = 0; i < servico.length; i++){
        let novoServico = servico[i];
       if(!localStorage.getItem('produtos')){
            localStorage.setItem('produtos', novoServico);
            continue;
        }
        let tarefas = localStorage.getItem('produtos') + ";" + novoServico;
        localStorage.setItem('produtos', tarefas);
    }
    return execucao;
}
window.addEventListener('load', removeServico);

frm.btExecutar.addEventListener('click', () => {
    if(!localStorage.getItem('produtos')){
        alert("Não a serviços...");
        resp.innerText = ``;
        return;
    }
    const emPrecesso = removeServico();
    verificarServico();
    resp.innerText = `${emPrecesso}`;
});