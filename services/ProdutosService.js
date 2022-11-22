import meusProdutos from '../dados';


var base_produtos = meusProdutos;
var ocorreuAlteracao = false;

export function listarProdutos() {
    console.debug(`${base_produtos.length} Produtos listados`);
    base_produtos.sort((a,b) => a?.produto.localeCompare(b?.produto));
    return base_produtos;
}

export function selecionarProduto({ id }) {
    const produtoSelecionado = base_produtos.find(produto => produto.id === id);
    console.debug(`Produto ${produtoSelecionado} selecionado pela chave ${id}`);
}

export function inserirProduto({ novoProduto }) {
    console.debug(`Produto ${novoProduto} cadastrado`);
    const novaChave = Math.floor(Math.random() * 1000000);
    novoProduto.id = novaChave;
    base_produtos.push(novoProduto);
    ocorreuAlteracao = true;
}

export function alterarProduto({ Produto }) {
    console.info(`Não implementado`);
}

export function excluirProduto({ id }) {
    console.debug(`Produto ${id} excluído`);
    base_produtos = base_produtos.filter(function(value, index, arr) {
        return value?.id !== id;
    });
    ocorreuAlteracao = true;
    console.debug(`Produtos após exclusão ${base_produtos.toString()}`);
}
