// Referencia ao Formulário ->>
const frm = document.querySelector('form'); 
const resp = document.getElementById('text');

//creat EventListener
frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const userName = frm.inName.value;
    resp.innerText = `Hello, ${userName}`
});