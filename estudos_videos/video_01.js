
// Banco de Dados - produtos -> 
const produtos = [
    {id: 1, nome: "Smartphone galaxy S21", preco: 3999.99, desconto: true, quantidade: 10},
    {id: 2, nome: "Notebook Dell Inspiron", preco: 4500.00, desconto: false, quantidade: 8},
    {id: 3, nome: "Smart TV LG 55", preco: 2799.00, desconto: true, quantidade: 4},
    {id: 4, nome: "HeadSet Hyperx Cloud Alpha", preco: 500.00, desconto: false, quantidade: 20},
    {id: 5, nome: "Câmera DLSR Cannon", preco: 3200.00, desconto: true, quantidade: 12},
    {id: 6, nome: "Console PlayStation 5", preco: 4199.00, desconto: false, quantidade: 17},
    {id: 7, nome: "SmartWatch Apple Watch", preco: 4699.00, desconto: true, quantidade: 0},
    {id: 8, nome: "Tablet iPad Air", preco: 2499.99, desconto: false, quantidade: 5},
    {id: 9, nome: "Monitor SuperHero AOC ", preco: 800.00, desconto: true, quantidade: 23},
    {id: 10, nome: "Caixa de Som Portátil Sony", preco: 1000.00, desconto: false, quantidade: 40}
];

/*
 *  Método Map()
 */
const numeros = [1, 2, 3, 4, 5]; 

const dobro = numeros.map((numero, index, arrayCompleto) => {
    return numero * 2;
}); 
//console.log(dobro);

    // lista produtos 
const novosProdutos = produtos.map((produto) => {

    const novopreco = produto.desconto ? produto.preco * 0.9 : produto.preco;
    return {
        id:  produto.id,
        nome: produto.nome, 
        preco: novopreco.toLocaleString('pt-br', {
            style: 'currency', currency: 'BRL'
        }),
        quantidade: produto.quantidade
    }
});
//console.log(novosProdutos);

/*
 *  Método Reduce()
 */

// array - numeros 
const soma = numeros.reduce((acumulador, atual) => {
    const total = acumulador + atual;

    return total
}, 10);
//console.log(soma);

// Faturamento do estoque inteiro 

const totalVendas = produtos.reduce((acumulador, produto) => {
    const soma = acumulador += (produto.preco * produto.quantidade);
    return soma
}, 0);

//console.log(`Valor do Estoque: ${totalVendas.toLocaleString('pt-br', {
//    style: 'currency', currency: 'BRL'
//})}`);


/*
 *  Método Reduce()
 */

const promocao = produtos.filter((produto) => {
    return produto.desconto
}).reduce((acumulador, produto) => {
    const soma = acumulador + (produto.preco * produto.quantidade);
    return soma
}, 0);

console.log(`Promoção do Estoque: ${promocao.toLocaleString('pt-br', {
    style: 'currency', currency: 'BRL'
})}`);