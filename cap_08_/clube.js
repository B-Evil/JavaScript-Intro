const frm = document.querySelector('form');
const resp = document.querySelector('pre');

frm.addEventListener('submit', (e) =>{
    e.preventDefault(); 
    const userName = frm.inName.value; 
    const idade = Number(frm.inIdade.value);

    resp.innerText = `${userName}\n${retornarTracos(userName)}\n${categorizarAluno(idade)}`;
    console.log(userName);
    console.log(retornarTracos(userName));
    console.log(categorizarAluno(idade))
});

function retornarTracos(atleta){
    const name = atleta.split(" ");
    let lines = "";

    for(let i = 0; i <= name.length - 1; i++){
        for(let j = 0; j <= name[i].length - 1; j++){
            lines += "-";
        }
        lines += " ";
    }

    return lines;
}

function categorizarAluno(idade){
    let categoria = "Categoria: ";
    if(idade <= 12){
        categoria += "Infantil";
    }else if(idade > 12 && idade < 18){
        categoria += "Juvenil";
    }else{
        categoria += "Adulto";
    }
    return categoria;
}