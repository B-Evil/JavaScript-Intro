/*
 *  02. O programa deve ler o nome completo de um participante
 *      em um evento e exibir apenas o seu nome e seu ultimo nome 
 */

const frm = document.querySelector('form');
const resp = document.querySelector('span');

frm.addEventListener('submit', (e) =>{
    e.preventDefault();
    // trim() -> retira os espaços em branco do inicio e final da string.
    const userName = frm.inName.value.trim().toUpperCase();
    if(!userName.includes(" ")){
        alert("Informe o nome completo..");
        return;
    }

    const firstName = userName.indexOf(" "); 
    const lastName = userName.lastIndexOf (" ");
    const cracha = userName.substr(0, firstName) + userName.substr(lastName);
    resp.innerText = cracha;
});