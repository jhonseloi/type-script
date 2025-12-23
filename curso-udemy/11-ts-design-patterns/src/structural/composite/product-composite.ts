export abstract class ProductComponent {
    abstract getPrice(): number

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    add(product: ProductComponent): void {}
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    remove(product: ProductComponent): void {}
}

export class ProductLeaf extends ProductComponent {
    constructor(
        public name: string,
        public price: number,
    ) {
        super()
    }

    getPrice(): number {
        return this.price
    }
}

export class ProductComposite extends ProductComponent {
    private children: ProductComponent[] = []

    add(...products: ProductComponent[]): void {
        products.forEach((product) => this.children.push(product))
    }

    remove(product: ProductComponent): void {
        const productIndex = this.children.indexOf(product)
        if (productIndex !== -1) this.children.splice(productIndex, 1)
    }

    getPrice(): number {
        return this.children.reduce((sum, child) => sum + child.getPrice(), 0)
    }
}

const pen = new ProductLeaf('Caneta', 2)
const smartphone = new ProductLeaf('Smartphone', 1_000)
const tShirt = new ProductLeaf('Camiseta', 50)
const productBox = new ProductComposite()
productBox.add(pen, smartphone, tShirt)

const tablet = new ProductLeaf('Tablet', 2_000)
const kindle = new ProductLeaf('Kindle', 500)
const anotherProductBox = new ProductComposite()
anotherProductBox.add(tablet, kindle)
productBox.add(anotherProductBox)

console.log(productBox)
console.log(productBox.getPrice())
