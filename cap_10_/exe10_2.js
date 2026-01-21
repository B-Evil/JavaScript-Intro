const frm = document.querySelector('form'); 
const divMoedas = document.querySelector('#divMoedas');

window.addEventListener('load', () =>{
    //gerar números aleátorios 
    const num1_00 = Math.ceil(Math.random() * 5);
    const num0_50 = Math.ceil(Math.random() * 5);
    const num0_25 = Math.ceil(Math.random() * 5);
    const num0_10 = Math.ceil(Math.random() * 5);

    //define texto alternativo das imagens
    const alt1_00 = "Moedas de Um real"; 
    const alt0_50 = "Moedas de cinqueta Centavos"; 
    const alt0_25 = "Moedas de Vinte e Cinco Centavos"; 
    const alt0_10 = "Moedas de Dez centavos";

    //Chama método criar moedas passando os argumentos
    CriarMoedas(num1_00, "1_00.jpg", alt1_00, "moeda1-00");
    CriarMoedas(num0_50, "0_50.jpg", alt0_50, "moeda0-50");
    CriarMoedas(num0_25, "0_25.jpg", alt0_25, "moeda0-25");
    CriarMoedas(num0_10, "0_10.jpg", alt0_10, "moeda0-10");
});

const CriarMoedas = (num, moeda, textAlt, classe) =>{
    for(let i = 1; i <= num; i++){
        const novaMoeda = document.createElement('img'); 
        novaMoeda.src = "imgs/" + moeda;
        novaMoeda.alt = textAlt; 
        novaMoeda.className = classe;
        divMoedas.appendChild(novaMoeda);
    }
    const br = document.createElement("br");
    divMoedas.appendChild(br);
}

frm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const palpite = Number(frm.inSoma.value);
    const moedas = divMoedas.querySelectorAll('img');
    let totalMoedas = 0; 

    moedas.forEach(moeda =>{
        if(moeda.className == "moeda1-00"){
            totalMoedas += 1;
        }else if(moeda.className == "moeda0-50"){
            totalMoedas += 0.50;
        }else if(moeda.className == "moeda0-25"){
            totalMoedas += 0.25;
        }else{
            totalMoedas += 0.1;
        }
    });

    const div = document.createElement('div');
    const h3 = document.createElement('h3');

    let mensagem;

    if(palpite == totalMoedas.toFixed(2)){
        div.className = "alert alert-success";
        mensagem = "Parabéns, você acertou!!"
    }else{
        div.className = "alert alert-danger";
        mensagem = "Ops, você Erroou!!"+`\nResposta correta era: ${totalMoedas.toFixed(2)}`;
    }

    const texto = document.createTextNode(mensagem);
    h3.appendChild(texto); 
    div.appendChild(h3); 
    divMoedas.appendChild(div);

    frm.inSoma.disabled = true;
});

frm.addEventListener('reset', () =>{
    window.location.reload();
});