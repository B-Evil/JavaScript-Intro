/*
 *      04. implemente um programa que valida senhas com o método match() 
 */

const frm = document.querySelector('form');
const resp = document.querySelector('span');
const erros = [];

frm.addEventListener('submit', (e) => {
    e.preventDefault();
    resp.innerText = "";
    const userSenha = frm.inSenha.value;
    if(userSenha.length < 8 || userSenha.length > 15){
        erros.push("Possuir entre 8 a 15 caracteres");
    }

    if(userSenha.match(/[0-9]/g) == null){
        erros.push(" Possuir números (no mínimo, 1)");
    }

    if(userSenha.match(/[A-Z]/g).length <= 1 || !userSenha.match(/[A-Z]/g)){
        erros.push(" Possuir letras maiúsculas (no mínimo, 2)");
    }

    if(!userSenha.match(/[a-z]/g)){
        erros.push(" Possuir letras minúcula (no mínimo, 1)");
    }

    if(!userSenha.match(/[\W|_]/g)){
        erros.push(" Possuir símbolos (no mínimo, 1)");
    }

    if(erros.length == 0){
        resp.innerText = "Ok! Senha Válida";
    } else {
        resp.innerText = `Erro... A senha deve ${erros.join(";")}`;
    }
});