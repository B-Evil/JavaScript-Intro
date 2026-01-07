const frm = document.querySelector('form');
const writeList = document.querySelector('pre');

frm.addEventListener('submit',(e) =>{
    e.preventDefault();
    const produto = frm.inProduto.value;
    if(localStorage.getItem("produtosNome")){
        const produtosNome = localStorage.getItem("produtosNome") + ";" + produto;
        localStorage.setItem("produtosNome", produtosNome);
    }else{
        localStorage.setItem("produtosNome", produto);
    }

    frm.reset();
    list();
});

const list = () => {
    const produtoNome = localStorage.getItem("produtosNome").split(";");
    let write = "";
    for(let i = 0; i < produtoNome.length; i++){
        write += `${produtoNome[i]}\n`;
    }

    writeList.innerText = `Produtos Adicionados\n${"-".repeat(20)}\n${write}`;
}

window.addEventListener('load', list);

frm.btClear.addEventListener("click", () =>{
    if(!localStorage.getItem("produtosNome")){
        alert("Não há produtos cadastrados.");
        frm.inProduto.fucos();
        return;
    }

    if(confirm("Deseja limpar a lista de Produtos ?")){
        localStorage.removeItem("produtosNome");
        writeList.innerText = "";
    }
    list();
});