/*
 * 00. O programa deve ler um número correspondente à qauntidade
 *     símbolos que devem ser preenchidos. deve intercalar entre 
 *     (*) e (-). 
 */
const frm = document.querySelector('form'); 
const resp1 = document.querySelector('#resp1');
//EventLister()
frm.addEventListener('submit', (e) =>{
    e.preventDefault(); 
    const quant = Number(frm.inNum.value);
    let spaceFree = ''; 
    for(let i = 1; i <= quant; i++){
        if(i % 2 == 0){
            spaceFree +=`-`; 
            continue;
        }
        spaceFree += `*`;
    }

    resp1.innerText = spaceFree;
});