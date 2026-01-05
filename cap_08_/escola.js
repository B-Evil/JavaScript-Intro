/*
 *  b) Elabore um programa que gere um senha inicial para um aluno
 */

const frm = document.querySelector('form');
const resp = document.querySelector('pre');

frm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userName = frm.inName.value;
    validarName(userName);
    const lastName = obterSobrenome(userName);
    const vogais = contarVogais(userName);
    resp.innerText = `Senha Inicial: ${lastName}${vogais}`;
});

function validarName(nome){
    const name = nome;
    let valido = true;
    if(name.match(/[0-9]/g)){
        alert("Seu Nome não pode conter números.");
        valido = false;
        return;
    }
    if (!name.match(/[A-Z]/g)){
        alert("Seu Nome não tem letras Maiúsculas.");
        valido = false;
        return; 
    }
}

function obterSobrenome(nome){
    const lastName = nome.split(" ");
    const num = lastName.length;
    const last = lastName[num - 1];
    return last.toLowerCase();
}

function contarVogais(nome){
    let count = 0;
    for (let i = 0; i <= nome.length; i++) {
        if(nome[i] == "a" || nome[i] == "e" || nome[i] == "i" || nome[i] == "o" || nome[i] == "u"){
            count++; 
        }
    }
    const vogais = count < 10 ? `0${count}` : count;
    return vogais
}