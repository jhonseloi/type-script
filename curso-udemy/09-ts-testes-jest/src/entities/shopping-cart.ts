import { CartItem } from './interfaces/cart-item'
import { Discount } from './discount'
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol'

export class ShoppingCart implements ShoppingCartProtocol {
    private readonly _items: CartItem[] = []

    constructor(private readonly discount: Discount) {}

    addItem(item: CartItem) {
        this._items.push(item)
    }

    removeItem(index: number) {
        this._items.splice(index, 1)
    }

    get items() {
        return this._items
    }

    total() {
        return +this._items
            .reduce((total, next) => total + next.price, 0)
            .toFixed(2)
    }

    totalWithDiscount() {
        return this.discount.calculate(this.total())
    }

    isEmpty() {
        return this._items.length === 0
    }

    clear() {
        console.log('Carrinho de compras foi limpo...')
        this._items.length = 0
    }
}
