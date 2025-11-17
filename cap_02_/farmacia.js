// obtém elemento html -> 
const frm = document.querySelector('form');
const respPromo = document.querySelector('h4');
const respProduto = document.querySelector('h3');


//processamento de dados -> 
frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const produto = frm.inProduto.value; 
    const preco = parseFloat(frm.inPreco.value);

    const promo = Math.floor(preco * 2);

    respProduto.innerText = `Promoção de ${produto}`;
    respPromo.innerText = `Leve 2 por apenas ${promo.toFixed(2)}`;
});