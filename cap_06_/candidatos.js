/*
 *  01 -> Elabore um programa que leia o nome e número de acertos
 *        de candidatos inscritos em um concurso. 
 * 
 *  02 -> Lista os dados acada inclusão.
 * 
 *  03 -> Exibir os candidatos aprovados. Candidatos que obtiveram 
 *        notas maior ou igual a informado no programa.
 */
const frm = document.querySelector('form');
const text = document.querySelector('pre');
const aviso = document.querySelector('p');
const line = '_'.repeat(40);
const dados = [];

frm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const userName = frm.inName.value;
    const userNota = parseFloat(frm.inPontos.value);
    dados.push({name:userName, pontos:userNota});
    frm.inName.value = "";
    frm.inPontos.value = ""; 
    frm.inName.focus();
    frm.btListar.dispatchEvent(new Event('click'));
});

frm.btListar.addEventListener("click", () =>{
    if(dados.length == 0){
        aviso.innerText = `${line}\nNão Candidatos listados no concurso.`
        frm.inName.focus();
        return;
    }
    const lista = dados.reduce((acumulador, dados) =>{
        acumulador += `Candidato: ${dados.name} - Nota: ${dados.pontos.toFixed(1)}\n`;
        return acumulador;
    },"");
    text.innerText = `${line}\n${lista}`;
    frm.inName.value = "";
    frm.inPontos.value = ""; 
    frm.inName.focus();
});

frm.btAprovados.addEventListener('click', () =>{
    if(dados.length == 0){
        alert("Adicione candidatos a lista.");
        frm.inName.focus();
        return;
    }
    const notaCorte = prompt("Qual é a nota de Corte da Prova? ");
    const aprovados = dados.filter((notas) =>{
        return notas.pontos >= notaCorte;
    }).reduce((acumulador, aprovados) => {
        acumulador += `Candidato: ${aprovados.name} - Notas: ${aprovados.pontos}\n`;
        return acumulador;
    }, "");
    text.innerText = `${line}\n${aprovados}`;
    frm.inName.value = "";
    frm.inPontos.value = ""; 
    frm.inName.focus();
});