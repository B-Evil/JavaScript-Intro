const prompt = require('prompt-sync')();
const bairro = prompt('Informe o Bairro de entraga: ').toLowerCase();

let taxaEntrega;
switch(bairro){
    case "centro": 
        taxaEntrega = 5.00; 
        break; 
    case "oeste":
        taxaEntrega = 10.00; 
        break;
    case "vila nova":
        taxaEntrega = 15.00;
        break;
    case "morro da cruz": 
        taxaEntrega = 20.00; 
        break;
    default:
        console.log("Em São Sebastião não há essa Quebrada.");
    break;
}

if(taxaEntrega){
    console.log(`Taxa de Entrega: ${taxaEntrega.toFixed(2)}`);
}