//obtém elementos do html -> 
const frm = document.querySelector('form');
const respAviso = document.querySelector('h4');
const respProduto = document.querySelector('h3');

//processamento de dado -> 
frm.addEventListener('submit', (e) =>{
    e.preventDefault(); 

    const produto = frm.inProduto.value; 
    const preco = parseFloat(frm.inPreco.value);

    const off = preco / 2;
    const promo = (preco * 3) - off; 

    respProduto.innerText = `${produto} - Promoção Leve 3 pague R$: ${promo.toFixed(2)}`;
    respAviso.innerText = `O 3º produto custa apenas R$: ${off.toFixed(2)}`
});