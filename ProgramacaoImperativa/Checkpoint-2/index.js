//Checkpoint 2 - Programação Imperativa, turma 3 - Paulo Souza


// 1. Crie uma variável produtos, que contenha um array de objetos, com no mínimo 3 itens. Dentro da variável, liste produtos disponíveis, informando os seguintes detalhes: Nome do Produto, Valor do Produto, Qualidade do Produto e Status.

// A informação Qualidade do Produto deve ser um número que irá de 0 a 10.
// A informação Status deve ser um Booleano, indicando se o produto está disponível em estoque.


// 2. Em seguida, um usuário deseja filtrar os produtos, com base em alguns critérios. Selecione todos os produtos que tenham: 

// Valor entre 482 e 1600;
// Qualidade superior a 60;
// Status como disponível.

// O resultado do filtro deve ser armazenado na variável carrinho.


// Por fim, é necessário exibir todos os itens presentes no carrinho, com seus nomes e preços correspondentes, e no final um valor total, resultante da somatória de todos os produtos.

var produtos = [

    {
        nomeProduto: "Processador AMD Ryzen 5",
        valor: 1799,
        qualidade: 8,
        status: false
    },

    {
        nomeProduto: "Mouse Gamer Redragon",
        valor: 99,
        qualidade: 5,
        status: true 
    },

    {
        nomeProduto: "Cadeira Gamer Pctop",
        valor: 979,
        qualidade: 7,
        status: true 
    },

    {
        nomeProduto: "WaterCooler Asus ROG STRIX",
        valor: 949,
        qualidade: 8,
        status: true 
    },

    {
        nomeProduto: "SSD Seagate IronWolf 240gb",
        valor: 659,
        qualidade: 7,
        status: false 
    }

]


var totalCarrinho;
var produtosFiltrados;



produtosFiltrados = produtos.filter(filtroProdutos);


//Nessa função utilizei qualidade > 6 pois na atividade pedia qualidade > 60 e não faz tanto sentido para este contexto, por isso tomei a liberdade de alterar.
function filtroProdutos(produto){
    return (produto.valor >= 482 && produto.valor <= 1600 && produto.qualidade > 6 && produto.status === true)
}

function imprimirProdutos(produto){
    console.log(`Produto: ${produto.nomeProduto},\nPreço: R$${produto.valor}\n------------`);
}



console.log(`ITENS NO SEU CARRINHO\n`)
var carrinho = produtosFiltrados.map(imprimirProdutos);

var totalCarrinho = produtosFiltrados.reduce((valorTotal, produto) => {
    return valorTotal.valor + produto.valor;
});

console.log(`O total do seu carrinho é de R$${totalCarrinho}`);

