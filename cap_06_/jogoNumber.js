/*
 *  00_ Criar um programa que gera um número aleatório entre 1 e 100
 *      que deve ser descoberto pelo usuário.
 */
const frm = document.querySelector('form');
const respErros = document.querySelector("#outErros");
const respDicas = document.querySelector('#outDicas');
const respChances = document.querySelector('#outChances');

const erros = [];
const chances = 6; 
const sorteado = Math.floor(Math.random() * 100) +1;
console.log(sorteado); // -> teste

frm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const numero = frm.inNumber.value;
    if(numero == sorteado){
        respDicas.innerText = `Parabéns. Você ganhou! Numero sorteado: ${sorteado}`;
        frm.btApostar.disabled = true;
    }else{
        if(erros.includes(numero)){
            alert(`Você já apostou esse número ${numero}. Tente outro...`);
        }else{
            erros.push(numero);
            const numErros = erros.length;
            const numChances = chances - numErros; 
            respErros.innerText = `${numErros} (${erros.join(', ')})`;
            respChances.innerText = numChances;
            if(numChances == 0){
                alert("Suas Chances acabaram..");
                frm.btApostar.disabled = true;
                respDicas.innerText = `Game Over!! O tigrinho Levou seu dinheiro.\nNúmero Sorteado ${sorteado}`;
            }else{
                const dica = numero < sorteado ? "Maior" : "Menor";
                respDicas.innerText = `Tente um número ${dica} que ${numero}`;
            }
        }
    }
    frm.inNumber.value = "";
    frm.inNumber.focus();
});

frm.btNovamente.addEventListener('click', () => {
    location.reload();
});