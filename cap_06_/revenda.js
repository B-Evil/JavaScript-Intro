/*
 * comentários.....
 *          dispatchEvent
 */
const frm = document.querySelector('form');
const resp = document.querySelector('pre');
const carros = []; 

frm.addEventListener('submit', (e) => {
    e.preventDefault();
    const modelo = frm.inModelo.value; 
    const preco = Number(frm.inPreco.value);
    carros.push({modelo, preco});
    frm.inModelo.value = '';
    frm.inPreco.value = ''; 
    frm.inModelo.focus();
    frm.btListar.dispatchEvent(new Event('click')); 
});
frm.btListar.addEventListener('click', ()=> {
    if(carros.length == 0){
        alert("Não há veículos cadastrados na Lista.");
        frm.inModelo.focus();
        return;
    }
    const lista = carros.reduce((listar, carro) => listar += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`,"");
    resp.innerText = `Lista de carros cadastrados\n${"-".repeat(40)}\n${lista}`;
});
frm.btFiltrar.addEventListener('click', () => {
    const maximo = Number(prompt("Digite o valor do seu orçamento."));
    let lista = "";
    if(maximo <= 5000 || isNaN(maximo)){
        alert(`Não a veículos igual ou abaixo do valor informado.\nR$:${maximo.toFixed(2)}`);
        return;
    }else{
        const precoFilter = carros.filter(carro => carro.preco <= maximo);  
        if(precoFilter.length == 0){
            alert(`Não há veículos cadastrados na lista com um valor igual ou abaixo de ${maximo.toFixed(2)}`);
            return;
        }
        precoFilter.forEach((carro) => {
            lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`;
        });
    }
    resp.innerText = `Lista de carros cadastrados\n${"-".repeat(40)}\n${lista}`;
});
frm.btSimular.addEventListener('click', () => {
    const promo = Number(prompt('Qual é a porcentagem de desconto ?'));// 10 -> (carro.preco * promo) / 100 
    listar = ''; 
    if(promo == 0 || isNaN(promo)){
        alert('Digite um valor válido.');
        return;
    }else{
        if(carros.length == 0){
            alert("Não há veículos cadastrados. ");
            return;
        }
       const carrosDesconto = carros.map(carro =>{
            const novoPreco = carro.preco - (carro.preco * promo / 100);

            return {
                modelo: carro.modelo,
                preco: novoPreco.toLocaleString('pt-br', {
                    style: "currency",  currency: 'BRL'
                })
            }
        });
        carrosDesconto.forEach((carro) =>{
            listar += `${carro.modelo} - ${carro.preco}\n`;
        } );
    }

    resp.innerText = `Lista de carros cadastrados\n${"-".repeat(40)}\n${listar}`;
});