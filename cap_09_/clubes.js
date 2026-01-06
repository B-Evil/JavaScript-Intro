const frm = document.querySelector('form');
const imgClub = document.querySelector('#imgClube');
const dvTitulo = document.querySelector('#divTitulo');

const trocarClube = () =>{
    const clube = ["Brasil", "Pelotas", "Farroupilha"];
    let selecao; 

    for(let i = 0;  i <= clube.length; i++){
        if(inRadios[i].checked){
            selecao = i;
            break;
        }
    }

    if(selecao <= 2){
        //modifica a imagem de acordo com a seleção do cliente
        dvTitulo.className = `row cores-${clube[selecao]}`;
        imgClub.src = `img/${clube[selecao].toLowerCase()}.png`;
        imgClub.alt = `Símbolo do ${clube[selecao]}`;
        imgClub.className = "img-fluid"; // muda o estilo para exibir a img
        localStorage.setItem("clube", clube[selecao]);
    }else{
        dvTitulo.className = `row`;
        imgClub.className = "d-none";
        localStorage.removeItem("clube");
    }
}

//modifica a img de acordo com a seleção do cliente
const inRadios = document.querySelectorAll("input");
for(const radio of inRadios){
    radio.addEventListener("change", trocarClube);
}

const verificarClube = () =>{
    if(localStorage.getItem("clube")){
        const clube = localStorage.getItem("clube");
        if(clube === "Brasil"){
            frm.rbBrasil.checked = true;
        }else if(clube === "Pelotas"){
            frm.rbPelotas.checked = true;
        }else if(clube == "Farroupilha"){
            frm.rbFarroupilha.checked = true;
        }else{
            frm.rbNenhum.checked = true;
        }

        trocarClube();
    }
}


//chama a function verificarClube()
window.addEventListener('load', verificarClube);