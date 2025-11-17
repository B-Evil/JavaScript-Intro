/*
 *  03. Implemente um programa que gere um e-mail institucional para 
 *      todos os funcionários da empresa.
 */

const frm = document.querySelector("form");
const resp = document.querySelector("span");

frm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // geted name = "Bruno Santiago Rodrigues"
    const nome = frm.inName.value.trim().split(" ");
    const tam = nome.length; 
    let email = "";

    for(let i = 0; i < tam - 1; i++){
        email += nome[i].charAt(0);
    }

    email += `${nome[tam - 1]}@empresa.com.br`;
    resp.innerText = email.toLowerCase();
});