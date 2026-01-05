/*
 * Elabore um programa para uma veterinária, o qual leia o preço de uma vacina
 *    e se o cliente possui ou não convênio. Caso possua algum convênio. Caso
 *    possua algum convenio, exibir uma caixa de seleção com os convênios "Amigos
 *    dos animais" e "Saúde Animal". O programa deve exibir o valor do desconto
 *    (10% sem convênio; 20% para Amigo dos animais; 50% para "Saúde Animal")
 *    e o valor a ser pago.
 */

const frm = document.querySelector('form');
const resp = document.querySelector('pre');

frm.rbSim.addEventListener('click', ()=>{
    frm.inConvenio.className = "exibir";
});

frm.rbNao.addEventListener('click', ()=>{
    frm.inConvenio.className = "ocultar";
});

frm.addEventListener('submit', () => {
    const valor = Number(frm.inValor.value);
    const desconto = calcularDesconto(valor);
    resp.innerText = `Desconto: ${desconto.toLocaleString('pt-br', {
        style: 'currency', currency: 'BRL'
    })}\nA pagar R$: ${(valor - desconto).toFixed(2)}`;
});

function calcularDesconto(valor){
    let produto;
    if(frm.rbSim.checked){
        const num = frm.inConvenio.selectedIndex;
        produto = frm.inConvenio.options[num].value;
    }else{
        produto = 0.10;
    }
    let preco = Number(produto);
    const desconto = valor * preco;
    return desconto;
}