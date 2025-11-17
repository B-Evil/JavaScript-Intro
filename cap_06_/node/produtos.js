/*  tasks... 
 *      Adicionar + 10 em cada produto
 *      Filtrar só os em promoção
 *      Saber qual é o faturamento se vendermos todos em promoção
 */

const produtos = [
    { id: 1, nome: "Placa de vídeo", preco: 2500, promocao: true, quantidade: 5 },
    { id: 2, nome: "Processador", preco: 1820, promocao: false, quantidade: 7 },
    { id: 3, nome: "SSD", preco: 335, promocao: false, quantidade: 10 },
    { id: 4, nome: "Fonte Energia", preco: 380, promocao: true, quantidade: 8 },
    { id: 5, nome: "Placa mãe", preco: 1100, promocao: false, quantidade: 3 },
    { id: 6, nome: "Gabinete Superframe", preco: 333, promocao: false, quantidade: 4 },
    { id: 7, nome: "WaterCooler", preco: 320, promocao: true, quantidade: 12 },
    { id: 8, nome: "Memória Ram 8gb", preco: 185, promocao: true, quantidade: 2 },
    { id: 9, nome: "Monitor AOC", preco: 840, promocao: false, quantidade: 20 }
];

const totalVendas = produtos.map((produtos) =>{
    return { ...produtos, quantidade: produtos.quantidade + 10};
}).filter((produtos) => produtos.promocao).reduce((acumulador, produtos) => acumulador + produtos.quantidade * produtos.preco, 0);

console.log(totalVendas.toLocaleString('pt-br',{
    style: "currency",
    currency: "BRL"
}));
