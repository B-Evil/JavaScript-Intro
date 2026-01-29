const frm = document.querySelector('form');
const tbFilmes = document.querySelector('table');
//&#10008

frm.addEventListener('submit', (e) => {
    e.preventDefault();
    const titulo = frm.inTitulo.value;
    const genero = frm.inGenero.value;
    
    inserirLinha(titulo, genero);
    gravarFilme(titulo, genero);

    frm.reset();
    frm.inTitulo.focus();
});

const inserirLinha = (titulo, genero) =>{
    const linha = tbFilmes.insertRow(-1);

    const col1 = linha.insertCell(0);
    const col2 = linha.insertCell(1);
    const col3 = linha.insertCell(2);

    col1.innerText = titulo;
    col2.innerText = genero;
    col3.innerHTML = "<i class='excluir' title='Excluir'>&#10008</i>"
};

const gravarFilme = (titulo, genero) => { 
    if(localStorage.getItem('tituloFilme')){
        const filmesTitulo = localStorage.getItem("tituloFilme") + ";" + titulo;
        const filmesGenero = localStorage.getItem('generoFilme') + ";" + genero;
        localStorage.setItem('tituloFilme', filmesTitulo);
        localStorage.setItem('generoFilme', filmesGenero);
    }else{
        localStorage.setItem('tituloFilme', titulo);
        localStorage.setItem('generoFilme', genero);
    }
};

window.addEventListener('load', () =>{
    if(localStorage.getItem('tituloFilme')){
        const titulo = localStorage.getItem('tituloFilme').split(';');
        const genero = localStorage.getItem('generoFilme').split(';');

        for(let i = 0; i < titulo.length; i++){
            inserirLinha(titulo[i], genero[i]);
        }
    }
});

tbFilmes.addEventListener('click', (e) =>{ 
    if(e.target.classList.contains("excluir")){
        // acessa o "pai do pai" do elemento alvo, e obtékm o txt do 1p filho
        const  titulo = e.target.parentElement.parentElement.children[0].innerText;
        if(confirm(`Confirmar exclusão do Filme ${titulo}`)){
            e.target.parentElement.parentElement.remove();
            localStorage.removeItem('tituloFilme');
            localStorage.removeItem('generoFilme');
            const linhas = document.querySelectorAll('tr');
            if(linhas.length > 0){
                for(let i = 1; i < tbFilmes.rows.length; i++){
                    const auxTitulo = tbFilmes.rows[i].cells[0].innerText;
                    const auxGenero = tbFilmes.rows[i].cells[1].innerText;
                    gravarFilme(auxTitulo, auxGenero);
                }
            }
        }
    }
});