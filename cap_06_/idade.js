/* Anotações: 
 */
const frm = document.querySelector("form");
const resp = document.querySelector('pre');
const child = [];

frm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userName = frm.inUserName.value; 
    const userAge = Number(frm.inIdade.value);
    child.push({userName, userAge}); 
    frm.reset();
    frm.inUserName.focus();
    frm.btListar.dispatchEvent(new Event('click'));
});
frm.btListar.addEventListener('click', ()=>{
    if(child.length === 0){
        alert("Não crianças cadastradas na lista.");
        return
    }
    const lista = child.reduce((acumulador, crianca) => {
        return acumulador + `Nome: ${crianca.userName} - Idade: ${crianca.userAge} Anos\n`
    }, "");
    resp.innerText = lista;
});
frm.btResumir.addEventListener('click', () =>{
    if(child.length == 0){
        alert("Não há crianças cadastradas na lista.");
    }
    const copiaChild = [...child];
    copiaChild.sort((a,b) => a.userAge - b.userAge); 
    let message = '';
    let aux = copiaChild[0].userAge;
    let names = [];
    copiaChild.forEach((criancas) => {
        const {userName, userAge} = criancas
        if(userAge === aux){
            names.push(userName);
        }else{
            message += aux +" Anos(s): "+names.length+" criança(s) - ";
            message += ((names.length / copiaChild.length) * 100).toFixed(2)+"%\n";
            message += `(${names.join(", ")})\n\n`;
            aux = userAge;
            names = [];
            names.push(userName);
        }
    })
    message += aux +" Anos(s): "+names.length+" criança(s) - ";
    message += ((names.length / copiaChild.length) * 100).toFixed(2)+"%\n";
    message += `(${names.join(", ")})\n\n`;
    resp.innerText = message;
});