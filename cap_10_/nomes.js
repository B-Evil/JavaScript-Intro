const frm = document.querySelector("form");
const divNome = document.querySelector('#divNome');

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userName = frm.inNome.value;
    separarNome(userName);
});

const separarNome = (userName) =>{
    const nome = userName.trim().split(" ");
    console.log(nome);

    for(let i = 0; i < nome.length; i++){
        const h3 = document.createElement('h3');
        const texto = document.createTextNode(nome[i]);
        h3.appendChild(texto);
        divNome.appendChild(h3);
        h3.className = 'h3-' +i;
    }
};

frm.addEventListener('reset', () =>{
    window.location.reload();
})