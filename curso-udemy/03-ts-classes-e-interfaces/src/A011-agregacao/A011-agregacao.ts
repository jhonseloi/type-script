export class CarrinhoDeCompras {
    private readonly produtos: Produto[] = []

    inserirProdutos(...produtos: Produto[]): void {
        for (const produto of produtos) {
            this.produtos.push(produto)
        }
    }

    quantidadeProdutos(): number {
        return this.produtos.length
    }

    valorTotal(): number {
        return parseFloat(
            this.produtos
                .reduce((soma, produto) => soma + produto.preco, 0)
                .toFixed(2),
        )
    }
}

export class Produto {
    constructor(
        public nome: string,
        public preco: number,
    ) {}
}

const produto1 = new Produto('Camiseta', 49.9)
const produto2 = new Produto('Caneca', 5.9)
const produto3 = new Produto('Caneta', 1.9)

const carrinhoDeCompras = new CarrinhoDeCompras()
carrinhoDeCompras.inserirProdutos(produto1, produto2, produto3)
console.log(carrinhoDeCompras.quantidadeProdutos())
console.log(carrinhoDeCompras.valorTotal())
