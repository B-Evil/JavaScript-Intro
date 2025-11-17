//obtém elementos do html -> 
const frm = document.querySelector('form');
const respValor = document.querySelector('h3'); 

//Processamento de dados do form -> 
frm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    //obtém dados do form ->
    const quiloValor = parseFloat(frm.inValor.value);//valor do quilo
    const gramasPeso = parseFloat(frm.inPeso.value);//prato do cliente

    //processamento ->
    const valor_prato = (quiloValor / 1000) * gramasPeso;
    const menssagem = `Valor do Prato R$: ${valor_prato}`;

    //Output ->
    respValor.innerText = menssagem;

})