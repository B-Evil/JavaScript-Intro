const prompt = require("prompt-sync")();
const vinhos = [];

function titulo(texto){ 
    console.log();
    console.log(texto);
    console.log("=".repeat(40));
}

function verification(){
    let itens = false
    if(vinhos.length === 0){
        titulo("~~~~< Não há Bedidas Cadastrados >~~~~");
        itens = true;
    }

    return itens;
}

do{
    titulo("===< Cadastro de Bedidas >==="); 
    console.log("1. inclusão de Vinhos");
    console.log("2. Listagem de Vinhos");
    console.log("3. Pesquisa por tipo");
    console.log("4. Média e Destaques");
    console.log("5. Finalizar");

    const opcao = Number(prompt("Opção: "));
    if(opcao === 1){
        incluir();
    }else if(opcao === 2){
        listar();
    }else if(opcao === 3){
        pesquisar()
    }else if(opcao === 4){
        destaques();
    }else{
        break;
    }
} while(true);

function incluir(){
    titulo("===< Inclusão de Bedidas>==");
    const marca = prompt("Marca..: ");
    const tipo = prompt("Tipo..: ");
    const preco = Number(prompt("Preço R$: "));

    vinhos.push({marca, tipo, preco});
    console.log("Ok!! Bedidas Cadastrado com sucesso.");
}

function listar(){
    if(verification()){return;}

    titulo("===< Lista de Bedidas Cadastrados >===");
    console.log("Marca............... Tipo............... Preço R$:");
    const listVinho = vinhos.reduce((acumulador, vinho) => {
        acumulador += `${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(20)} ${vinho.preco.toLocaleString('pt-br',{
            style: 'currency', currency: 'BRL'
        })}\n`;
        return acumulador;
    },"");

    console.log(listVinho);
}

function pesquisar(){
    if(verification()){return;}
    titulo("===< Pesquisar por tipo de Bedidas >===");
    const tipos = prompt("Tipo do Bedidas: ");
    let count = 0;
    console.log("Marca............... Tipo............... Preço R$:");
    for(const vinho of vinhos){
        if(vinho.tipo.toUpperCase().includes(tipos.toUpperCase())){
            console.log(`${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(20)} ${vinho.preco.toLocaleString('pt-br',{
                style: 'currency', currency: 'BRL' 
            }).padEnd(20)}`);
            count++;
        }
    }

    if(count === 0){
        console.log(`___ Não há Bedidass do tipo  ${tipos}___`);
    }
}

function destaques(){
    if(verification()){return;}
    titulo("===< Media e Destaques do cadastro de Bedidas >===");
    
    let total = vinhos.reduce((acumulador, vinho) =>{
        acumulador += vinho.preco;
        return acumulador;4
    }, 0);

    const media = total / vinhos.length;
    const copyVinhos = [...vinhos];
    copyVinhos.sort((a,b) => a.preco - b.preco);
    const menor = copyVinhos[0];
    const maior = copyVinhos[vinhos.length - 1]; 

    console.log(`Preço médio das Bedidas ${media.toLocaleString('pt-br', {
        style: 'currency', currency: "BRL"
    })}`);
    console.log(`Menor valor ${menor.preco.toLocaleString('pr-br'), {
        style: 'currency', currency: 'BRL'
    }} - ${menor.marca}`);
    console.log(`Maiorvalor ${maior.preco.toLocaleString('pr-br'), {
        style: 'currency', currency: 'BRL'
    }} - ${maior.marca}`);
}